const employees = [
  {
    "id": 1,
    "email": "1@1.com",
    "password": "123",
    "name": "Arjun",
    "taskCounts": {
      "active": 0,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    },
    "tasks": [
      {
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Create slides for the upcoming client meeting.",
        "taskDate": "2024-11-05",
        "category": "Work",
        "active": false,
        "completed": false,
        "failed": false,
        "newTask": true
      },
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review and provide feedback on the latest PRs.",
        "taskDate": "2024-11-04",
        "category": "Development",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly team status meeting.",
        "taskDate": "2024-11-03",
        "category": "Meetings",
        "active": false,
        "completed": false,
        "failed": true,
        "newTask": false
      }
    ]
  },
  {
    "id": 2,
    "email": "2@2.com",
    "password": "123",
    "name": "Priya",
    "taskCounts": {
      "active": 1,
      "completed": 1,
      "failed": 0,
      "newTask": 0
    },
    "tasks": [
      {
        "taskTitle": "Documentation Update",
        "taskDescription": "Update the user manual with new features.",
        "taskDate": "2024-11-06",
        "category": "Documentation",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "Bug Fix",
        "taskDescription": "Fix the issue reported in the payment module.",
        "taskDate": "2024-11-02",
        "category": "Development",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      }
    ]
  },
  {
    "id": 3,
    "email": "3@3.com",
    "password": "123",
    "name": "Rahul",
    "taskCounts": {
      "active": 1,
      "completed": 1,
      "failed": 1,
      "newTask": 0
    },
    "tasks": [
      {
        "taskTitle": "Market Research",
        "taskDescription": "Research competitors' strategies for 2024.",
        "taskDate": "2024-11-08",
        "category": "Research",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "Write Blog Post",
        "taskDescription": "Write a post about emerging trends in tech.",
        "taskDate": "2024-11-07",
        "category": "Content",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "Update Website",
        "taskDescription": "Implement the latest SEO updates.",
        "taskDate": "2024-11-01",
        "category": "Development",
        "active": false,
        "completed": false,
        "failed": true,
        "newTask": false
      }
    ]
  },
  {
    "id": 4,
    "email": "4@4.com",
    "password": "123",
    "name": "Sneha",
    "taskCounts": {
      "active": 1,
      "completed": 0,
      "failed": 1,
      "newTask": 0
    },
    "tasks": [
      {
        "taskTitle": "Client Call",
        "taskDescription": "Discuss project timelines with the client.",
        "taskDate": "2024-11-10",
        "category": "Client",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "Database Optimization",
        "taskDescription": "Improve query performance for the dashboard.",
        "taskDate": "2024-11-05",
        "category": "Development",
        "active": false,
        "completed": false,
        "failed": true,
        "newTask": false
      }
    ]
  },
  {
    "id": 5,
    "email": "5@5.com",
    "password": "123",
    "name": "Ananya",
    "taskCounts": {
      "active": 0,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    },
    "tasks": [
      {
        "taskTitle": "Social Media Campaign",
        "taskDescription": "Plan and schedule posts for the week.",
        "taskDate": "2024-11-04",
        "category": "Marketing",
        "active": false,
        "completed": false,
        "failed": false,
        "newTask": true
      },
      {
        "taskTitle": "Inventory Check",
        "taskDescription": "Verify inventory levels and reorder if necessary.",
        "taskDate": "2024-11-02",
        "category": "Operations",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Conduct an audit of user permissions.",
        "taskDate": "2024-11-03",
        "category": "Security",
        "active": false,
        "completed": false,
        "failed": true,
        "newTask": false
      }
    ]
  },
  {
    "id": 6,
    "email": "6@6.com",
    "password": "123",
    "name": "Vikram",
    "taskCounts": {
      "active": 1,
      "completed": 1,
      "failed": 0,
      "newTask": 0
    },
    "tasks": [
      {
        "taskTitle": "Weekly Report",
        "taskDescription": "Prepare the weekly performance report.",
        "taskDate": "2024-11-09",
        "category": "Reports",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "System Upgrade",
        "taskDescription": "Upgrade the server software to the latest version.",
        "taskDate": "2024-11-04",
        "category": "IT",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      }
    ]
  },
  {
    "id": 7,
    "email": "7@7.com",
    "password": "123",
    "name": "Maya",
    "taskCounts": {
      "active": 1,
      "completed": 0,
      "failed": 1,
      "newTask": 1
    },
    "tasks": [
      {
        "taskTitle": "Design Review",
        "taskDescription": "Review new design prototypes with the team.",
        "taskDate": "2024-11-08",
        "category": "Design",
        "active": false,
        "completed": false,
        "failed": false,
        "newTask": true
      },
      {
        "taskTitle": "Client Feedback",
        "taskDescription": "Incorporate feedback from the client on the latest designs.",
        "taskDate": "2024-11-06",
        "category": "Client",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "Old Project Audit",
        "taskDescription": "Audit old projects for consistency and issues.",
        "taskDate": "2024-11-03",
        "category": "Audit",
        "active": false,
        "completed": false,
        "failed": true,
        "newTask": false
      }
    ]
  },
  {
    "id": 8,
    "email": "8@8.com",
    "password": "123",
    "name": "Nikhil",
    "taskCounts": {
      "active": 1,
      "completed": 2,
      "failed": 0,
      "newTask": 0
    },
    "tasks": [
      {
        "taskTitle": "Backend Refactoring",
        "taskDescription": "Refactor legacy code for better performance.",
        "taskDate": "2024-11-07",
        "category": "Development",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "Code Documentation",
        "taskDescription": "Document backend service architecture.",
        "taskDate": "2024-11-02",
        "category": "Documentation",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "Security Patch",
        "taskDescription": "Apply the latest security patch to the servers.",
        "taskDate": "2024-11-01",
        "category": "Security",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      }
    ]
  },
  {
    "id": 9,
    "email": "9@9.com",
    "password": "123",
    "name": "Kavya",
    "taskCounts": {
      "active": 1,
      "completed": 1,
      "failed": 1,
      "newTask": 0
    },
    "tasks": [
      {
        "taskTitle": "Marketing Strategy",
        "taskDescription": "Develop a new strategy for the winter campaign.",
        "taskDate": "2024-11-08",
        "category": "Marketing",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "SEO Analysis",
        "taskDescription": "Analyze SEO performance and suggest improvements.",
        "taskDate": "2024-11-03",
        "category": "SEO",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "Ad Campaign Review",
        "taskDescription": "Review the performance of the recent ad campaign.",
        "taskDate": "2024-11-02",
        "category": "Marketing",
        "active": false,
        "completed": false,
        "failed": true,
        "newTask": false
      }
    ]
  },
  {
    "id": 10,
    "email": "10@10.com",
    "password": "123",
    "name": "Rishi",
    "taskCounts": {
      "active": 1,
      "completed": 2,
      "failed": 0,
      "newTask": 0
    },
    "tasks": [
      {
        "taskTitle": "Product Demo",
        "taskDescription": "Prepare for the upcoming product demo for stakeholders.",
        "taskDate": "2024-11-10",
        "category": "Sales",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "Project Proposal",
        "taskDescription": "Write a proposal for the new project initiative.",
        "taskDate": "2024-11-04",
        "category": "Projects",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      },
      {
        "taskTitle": "Budget Review",
        "taskDescription": "Review the budget allocation for next quarter.",
        "taskDate": "2024-11-03",
        "category": "Finance",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      }
    ]
  }
]

  const admin = [
    {
      "id": 1,
      "email": "a@a.com",
      "password": "123",
      "name": "Rudra"
    }
  ]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return{employees, admin}
}