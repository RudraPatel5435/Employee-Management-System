const employees = [
    {
      "id": 1,
      "email": "e@e.com",
      "password": "123",
      "name": "Arjun",
      "taskCounts": {
        "active": 1,
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
          "active": true,
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
      "email": "employee2@example.com",
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
      "email": "employee3@example.com",
      "password": "123",
      "name": "Rahul",
      "taskCounts": {
        "active": 1,
        "completed": 1,
        "failed": 1,
        "newTask": 1
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
          "newTask": true
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
      "email": "employee4@example.com",
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
      "email": "employee5@example.com",
      "password": "123",
      "name": "Ananya",
      "taskCounts": {
        "active": 1,
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
          "active": true,
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
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "a@a.com",
      "password": "123",
      "name": "Vikram"
    }
  ];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return{employees, admin}
}