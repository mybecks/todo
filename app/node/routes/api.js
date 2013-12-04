/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
// var data = {
//   "posts": [
//     {
//       "title": "Lorem ipsum",
//       "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       "title": "Sed egestas",
//       "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
//     }
//   ]
// };

var data = {
    "projects":[
    {'id': 0, 'description': 'Work', 'tasks':[{'id': 0, 'desciption':'Test0'}, {'id': 1, 'desciption':'Test1'}, {'id': 2, 'desciption':'Test2'}] },
    {'id': 1, 'description': 'Private', 'tasks':[{'id': 0, 'desciption':'Do smth0'}, {'id': 1, 'desciption':'Do smth1'}, {'id': 2, 'desciption':'Do smth3'}] },
    {'id': 2, 'description': 'Science', 'tasks':[{'id': 0, 'desciption':'#Styud0'}, {'id': 1, 'desciption':'Study1'}, {'id': 2, 'desciption':'Study2'}] },
    {'id': 3, 'description': 'Study', 'tasks':[{'id': 0, 'desciption':'Lazy0'}, {'id': 1, 'desciption':'Lazy1'}, {'id': 2, 'desciption':'Lazy2'}] },
    {'id': 4, 'description': 'WTF', 'tasks':[{'id': 0, 'desciption':'wtf0'}, {'id': 1, 'desciption':'wtf1'}, {'id': 2, 'desciption':'wtf2'}] }
]
};


// GET
exports.projects = function (req, res) {
    var projects = [];
    data.projects.forEach(function (project, i) {
        projects.push({
            id: project.id,
            description: project.description,
            tasks: project.tasks
        });
    });

    res.json({
        projects: projects
    });
};

exports.project = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < data.projects.length) {
        res.json({
            project: data.projects[id]
        });
    } else {
        res.json(false);
    }
};


// POST
exports.addProject = function (req, res) {
  data.posts.push(req.body);
  res.json(req.body);
};

exports.addtask = function (req, res) {
    var body = req.body;
    console.log(body);

    // data.posts.push();
    // data.posts.push(req.body);
    res.json('done');
};