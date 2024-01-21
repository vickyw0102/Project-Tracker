
var currentDayTime = $("#currentDayTime");
var today =dayjs();
currentDayTime.text(today.format("dddd, MMMM D, YYYY, h:mm:ss a"));

var projectDisplayEl = $("#project-display");
var addProjectBtn = $("#add-project");
var inputModal = $("#inputModal");  
var inputModalLabel = $("#inputModalLabel");  

 projectSet.forEach(function(project){
        var row = $("<div>");
        var btn = $("<button>");
        row.addClass("row");
        row.addClass("justify-content-center");
        projectDisplayEl.append(row);   
        btn.text(project.name);
        btn.addClass("btn btn-primary");
        btn.attr("data-name", project.name);
        btn.attr("data-type", project.type);
        btn.attr("data-due", project.due);
        btn.attr("data-rate", project.rate);
        row.append(btn);
    });
  
addProjectBtn.on("click", function(event) {
    event.preventDefault();
      inputModalLabel.text("Add New Project");
      $("#projectName").val("");
      $("#projectType").val("");
      $("#dueDate").val("");
      $("#hourlyRate").val("");
      inputModal.modal("show");
  });

$(document).on("click", "#saveProject", function(event) {
    event.preventDefault();

      if (
      $("#projectName").val() === "" ||
      $("#projectType").val() === "" ||
      $("#dueDate").val() === "" ||
      $("#hourlyRate").val() === ""
      ) {
      return;
      }  

      else {
        var addProject = {
          name: $("#projectName").val().trim(),
          type: $("#projectType").val().trim(),
          due: $("#dueDate").val().trim(),
          rate: $("#hourlyRate").val().trim()
        };
        projectSet.push(addProject);
        inputModal.modal("hide");
        renderProject();
      }
});

$(document).on("click", ".deleteBtn", function(event) {
    var delProject = $(this).data("name");
    for (var i = 0; i < projectSet.length; i++) {
        if (projectSet[i].name === delProject) {
            projectSet.splice(i, 1);
        }
    }
    renderProject();
});

renderProject();

