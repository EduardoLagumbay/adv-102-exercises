
export const directs = [
    {id: 1, title: "Exercise"},
    {id: 2, title: "Exercise"},
    {id: 3, title: "Exercise",
     desc: "Login screen and Login Fields",
     fields: ["Email", "Password"],
     direct: "/screens/loginScreen" as const
    },
    {id: 4, title: "Exercise",
     desc: "Screens for useState and useEffect",
     fields: ["Email", "Password"],
     direct: "/screens/hooks" as const
    },
    {id: 5, title: "Exercise",
     desc: "Register screen and Register Fields",
     fields: ["Image Picker", "Name", "Password", "Register Button"],
     direct: "/screens/registerScreen" as const
    },
    {id: 6, title: "Exercise",
     desc: "Create a simple CRUD using useReducer and useContext",
     direct: "/screens/crudScreen" as const
    },
    {id: 7, title: "Exercise",
    desc: "Create a simple quiz app \n using API from Open Trivia Database",
    direct: "/screens/Exercise_7/quiz" as const},
    {id: 8, title: "Exercise",
    desc: "Create a Login and Registration Screen \n using React Hook Form",
    direct: "/screens/Exercise_8/container" as const},
]