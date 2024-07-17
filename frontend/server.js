// server.js
import express from 'express';
import mysql from 'mysql2'; // or 'mysql'

const app = express();

// Configure middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'MessiahMissionChurch30',
  database: 'codedator_db'
});

// API route to get all topics
app.get('/api/topics', (req, res) => {
  const query = 'SELECT * FROM Topics';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


// Route to create a new topic
app.post('/api/topics', (req, res) => {
    const { name, description } = req.body;
  
    // Check if required fields are provided
    if (!name) {
      return res.status(400).json({ error: 'Topic name is required' });
    }
  
    // SQL query to insert a new topic
    const query = 'INSERT INTO Topics (name, description) VALUES (?, ?)';
  
    // Execute the query
    connection.query(query, [name, description], (err, result) => {
      if (err) throw err;
  
      // Send the newly created topic as a response
      const newTopic = { id: result.insertId, name, description };
      res.status(201).json(newTopic);
    });
});

// Route to view all lessons
app.get('/api/lessons', (req, res) => {
    const query = 'SELECT * FROM Lessons';

    connection.query(query, (err, results) => {
    if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error' });
    }

    res.status(200).json(results);
    });
});

// Route to create a new lesson
app.post('/api/lessons', (req, res) => {
    const { topicId, title, description, sourceCodeUrl, assignmentUrl, videoUrl, order } = req.body;

    // Check if required fields are provided
    if (!topicId || !title || !order) {
        return res.status(400).json({ error: 'Topic ID, title, and order are required' });
    }

    // SQL query to insert a new lesson
    const query = 'INSERT INTO Lessons (topic_id, title, description, source_code_url, assignment_url, video_url, `order`) VALUES (?, ?, ?, ?, ?, ?, ?)';

    // Execute the query
    connection.query(query, [topicId, title, description, sourceCodeUrl, assignmentUrl, videoUrl, order], (err, result) => {
        if (err) throw err;

        // Send the newly created lesson as a response
        const newLesson = { id: result.insertId, topicId, title, description, sourceCodeUrl, assignmentUrl, videoUrl, order };
        res.status(201).json(newLesson);
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});