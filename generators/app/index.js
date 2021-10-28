"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const path = require("path");
const mkdirp = require("mkdirp");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Hi, I'm ${chalk.red(
          "Sicarator"
        )}! I'm going to help you to set up your new project!`
      )
    );

    this.answers = await this.prompt([
      {
        name: "projectName",
        message: "What's the name of your project?",
        default: path.basename(process.cwd())
      },
      {
        name: "projectDescription",
        message: "Describe it in one line:"
      },
      {
        name: "ci",
        message: "Which CI (Continuous Integration) tool do you want to use?",
        type: "list",
        default: ".circleci",
        choices: [
          {
            name: "CircleCI",
            value: ".circleci"
          },
          {
            name: "None of these",
            value: null
          }
        ]
      }
    ]);
  }

  default() {
    if (path.basename(this.destinationPath()) !== this.answers.projectName) {
      this.log(`${chalk.green("create folder")} ${this.answers.projectName}.`);
      mkdirp.sync(this.answers.projectName);
      this.destinationRoot(this.destinationPath(this.answers.projectName));
    }
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("common"),
      this.destinationPath(),
      this.answers,
      {},
      { globOptions: { dot: true } }
    );

    if (this.answers.ci !== null) {
      this.fs.copyTpl(
        this.templatePath(path.join("ci", this.answers.ci)),
        this.destinationPath(this.answers.ci),
        this.answers,
        {},
        { globOptions: { dot: true } }
      );
    }
  }
};