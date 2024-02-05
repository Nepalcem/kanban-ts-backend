
# Routes
Creating(POST) a new board. Body: { title}
```bash
https://kanban-ts-backend.onrender.com/boards/create
```
Updating(PATCH) board. Body: { title, hashedID}
```bash
https://kanban-ts-backend.onrender.com/boards/:hashedID
```
Get(GET) board. Body: { hashedID}
```bash
https://kanban-ts-backend.onrender.com/boards/:hashedID
```
Removing(DELETE) board. Body: { hashedID}
```bash
https://kanban-ts-backend.onrender.com/boards/:hashedID
```
Adding Task(POST). Body: { title, description, status, owner}
```bash
https://kanban-ts-backend.onrender.com/tasks/
```
Updating Task(PATCH). Body: { _id, title, description, status}
```bash
https://kanban-ts-backend.onrender.com/tasks/
```
Deleting Task(DELETE). Body: { _id}
```bash
https://kanban-ts-backend.onrender.com/tasks/
```

# Commands 
To run the project locally with TS files use:
```bash
npm run dev
```

To Compile TS files into Production ./dist folder use:
```bash
npm run build
```

To run JS files from Production ./dist folder use:
```bash
npm start
```
