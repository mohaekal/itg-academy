export default function() {
    return [
      {
        title: "Dashboard",
        to: "/dashboard",
        htmlBefore: '<i class="material-icons">edit</i>',
        htmlAfter: ""
      },
      {
        title: "Courses",
        htmlBefore: '<i class="material-icons">book</i>',
        to: "/courses",
      },
      {
        title: "Test",
        htmlBefore: '<i class="material-icons">offline_pin</i>',
        to: "/test-admin",
      },
      {
        title: "Exam",
        htmlBefore: '<i class="material-icons">list_alt</i>',
        to: "/exam-admin",
      },
      {
        title: "Users",
        htmlBefore: '<i class="material-icons">group</i>',
        to: "/#",
      },
      {
        title: "Menu",
        htmlBefore: '<i class="material-icons">person</i>',
        to: "/#",
      },
      {
        title: "Menu",
        htmlBefore: '<i class="material-icons">error</i>',
        to: "/#",
      }
    ];
  }
  