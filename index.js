$("#addNoteBtn").on("click", function () {
    openForm();
})

// $(document).click(function (e) {
//     if ($(e.target).closest('#note-form').length != 0) return false;
//     closeForm();
// });



function openForm() {
    document.getElementById("note-form").style.display = "flex";
    document.getElementById("addNoteBtn").style.display = 'none';
}

function closeForm() {
    document.getElementById("note-form").style.display = "none";
    document.getElementById("addNoteBtn").style.display = 'flex'
}