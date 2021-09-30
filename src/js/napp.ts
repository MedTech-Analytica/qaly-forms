import jsyaml from "js-yaml";
import {Survey} from "survey-jquery";

// @ts-ignore
Survey.StylesManager.applyTheme("modern");
var yaml: JQuery.jqXHR;
var json: unknown = {};


jQuery(function ($) {
    yaml = $.get("inquerito/inquerito.yml");
    yaml.done(function(inquerito) {
        json = jsyaml.load(inquerito);
    });
});
