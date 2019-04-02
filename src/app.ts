'use strict';
const gameModels = require('./dist/game_model');
const jsonEditor = require('@json-editor/json-editor');

setupWorkbench();

// function generateHero() {
//     const generateHeroJson = require("./dist/generate_json_objects");
//     generateHeroJson.generateHeroEnum();
// }
//
// function generateRarity() {
//     const generateRarityJson = require("./dist/generate_json_objects");
//     generateRarityJson.generateRarityEnum();
// }

function setupWorkbench() {
  // generateHero();
  // generateRarity();

  const game = gameModels.game;
  console.log(game);

  jsonEditor.defaults.options.upload = function(type: string,
                                                file: any,
                                                cbs: any) {
    if(type === 'root.upload_fail') {
      cbs.failure('Upload failed');
    } else {
      cbs.success(file.path);
    }
  };
  jsonEditor.defaults.options.theme = 'html';
  jsonEditor.defaults.options.show_errors = 'always';

  jsonEditor.defaults.options.disable_edit_json = true;
  jsonEditor.defaults.options.disable_properties = true;

  // Initialize the editor
  const editor = new jsonEditor(document.getElementById('editor_holder'), {
    // Enable fetching schemas via ajax
    ajax: true,

    schema: {
      $ref: 'json_objects/mod.json',
    },

    // Disable additional properties
    no_additional_properties: true,

    // Require all properties by default
    required_by_default: true,
  });

  // Hook up the submit button to log to the console
  document.getElementById('submit')!.addEventListener('click', function() {
    // Get the value from the editor
    console.log(editor.getValue());
  });

  // Hook up the validation indicator to update its
  // status whenever the editor changes
  editor.on('change', function() {
    // Get an array of errors from the validator
    const errors = editor.validate();

    const indicator = document.getElementById('valid_indicator');
    if(indicator !== null) {
      // Not valid
      if(errors.length) {
        indicator.style.color = 'red';
        indicator.textContent = 'not valid';
      }
      // Valid
      else {
        indicator.style.color = 'green';
        indicator.textContent = 'valid';
      }
    }

  });

  // Hook up the submit button to log to the console
  const fs = require('fs');
  document.getElementById('submit')!.addEventListener('click', function() {
    // Get the value from the editor
    console.log(editor.getValue());
    const filename = 'export_file.json';
    fs.writeFileSync(filename, JSON.stringify(editor.getValue()));
  });

}



