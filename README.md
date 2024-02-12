
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

# Routes
Creating a new board(POST) . Body: { title}
```bash
https://kanban-ts-backend.onrender.com/boards/
```
Updating board(PATCH) . Body: { title, hashedID}
```bash
https://kanban-ts-backend.onrender.com/boards/:hashedID
```
Get board(GET) . Body: { hashedID}
```bash
https://kanban-ts-backend.onrender.com/boards/:hashedID
```
Removing board(DELETE). Body: { hashedID}
```bash
https://kanban-ts-backend.onrender.com/boards/:hashedID
```
Adding Task(POST). Body: { hashedID, tasks}
```bash
https://kanban-ts-backend.onrender.com/boards/tasks/:hashedID
```
Updating Task(PATCH). Body: { hashedID, tasks}
```bash
https://kanban-ts-backend.onrender.com/boards/:hashedID
```
Deleting Task(DELETE). Body: { hashedID, tasks}
```bash
https://kanban-ts-backend.onrender.com/boards/:hashedID
```

