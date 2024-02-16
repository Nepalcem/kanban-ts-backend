
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
Get board(GET) . Req Params: { hashedID}
```bash
https://kanban-ts-backend.onrender.com/boards/:hashedID
```
Removing board(DELETE). Req Params: { hashedID}
```bash
https://kanban-ts-backend.onrender.com/boards/:hashedID
```
Adding Task(POST). Body: { title, owner(objectId), description, status, columnIndex }
```bash
https://kanban-ts-backend.onrender.com/tasks/
```
Updating Task(PATCH). Body: { _id, title, description, owner, status, columnIndex }
```bash
https://kanban-ts-backend.onrender.com/tasks/:_id
```
Deleting Task(DELETE). Req Params: { _id}
```bash
https://kanban-ts-backend.onrender.com/tasks/:_id
```

