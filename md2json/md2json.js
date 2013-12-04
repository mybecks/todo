/*jshint node:true */
module.exports = function md2json(param){
	"use strict";

	var fs = require('fs');
	var dir = require('path');
	var mdFile;
	var taskArray = [];

	// http://stackoverflow.com/questions/14207496/javascript-recursion-completes-before-traversing-the-whole-tree
	var createChildTree = function(child){
		
	};

	var taskToObject = function(task){
		var obj = {};
		obj.name = task[0].replace(/#{3}./g, '');
		obj.tasks = [];
		// s{4} spaces or t{1} tab - some prefer spaces instead of tabs, so it won't break
		var parentRegex = /^(\s{0}|\t{0})\*.*/;
		var childL1Regex = /^(\s{4}|\t{1})\*.*/;
		var parentChild;
		for(var i=1; i<task.length; i++){

			if(parentRegex.test(task[i]))
			{
				parentChild = {
					task:task[i], //.replace(/\* /g, ''),
					childs : []
				};

				obj.tasks.push(parentChild);
				// lastParent = parentChild;
			}else if(childL1Regex.test(task[i])){
				parentChild.childs.push(task[i]);
			}
		}

		console.dir(obj);
	};

	var getTaskRange = function(tasks, start, end){
		// console.log('Tasks for '+tasks[start].replace(/#{3}./g, ''));
		var task = [];
		for(var i =start; i<end; i++){
			task.push(tasks[i]);
		}

		taskToObject(task);
		// console.log(task);
		// console.log('\n');
	};

	var loadMarkdownFormattedFile = function(param){
		mdFile = fs.readFileSync(param, 'utf8');
		// mdFile = mdFile.replace(/\t/g, '+');
		// console.log(mdFile);
	};


	var parseMarkdownToJson = function(){
		// var self = this;
		var lines = mdFile.split('\n');
		// console.log(lines.length);
		var headerFound = false;

		for(var i=0; i<lines.length; i++){
			var line = lines[i];
			var startOfTask;
			var endOfTask;
			var regex = /#{3}.[A-Za-z]+/g;
			

			if(regex.test(line)){
				startOfTask = i;
				headerFound = true;
				// console.log('matched on line: '+ i +' - '+line.replace(/#{3}./g, '') + headerFound);
			}

			if(line === '' && headerFound){
				// console.log(i);
				endOfTask = i;
				
				getTaskRange(lines, startOfTask, endOfTask);
			}
		}
		// console.log(lines[6]);
		// console.log(lines[9]);
	};

	loadMarkdownFormattedFile(param);
	parseMarkdownToJson();
};


new require("./md2json.js")(process.argv[2]);