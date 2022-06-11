'use strict';
const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);
const { db } = require('../src/models/index.model');

// before any of the test create a connection
beforeAll(async () => {
  await db.sync();
});

describe('API server', () => {
  test('Returns 404 on wrong route', async () => {
    const response = await mockRequest.get('/abc');
    expect(response.status).toBe(404);
  });
  test('Returns 404 on wrong method', async () => {
    const response = await mockRequest.patch('/student');
    expect(response.status).toBe(404);
  });
  test('Can add a Student', async () => {
    const response = await mockRequest.post('/student').send({
      firstName: 'Sameer',
      lastName: 'Zamer',
      enrolledCourse: 'Empty',
    });
    expect(response.status).toBe(201);
  });
  test('Getting all Students', async () => {
    const response = await mockRequest.get('/student');
    expect(response.status).toBe(200);
  });
  test('Getting a single Student', async () => {
    const response = await mockRequest.get('/student/1');
    expect(response.status).toBe(200);
  });

  test('Can update Student record', async () => {
    let response = await mockRequest.put('/student/1');
    expect(response.status).toBe(201);
  });
  test('Can delete an element', async () => {
    let response = await mockRequest.delete('/student/1');
    expect(response.status).toBe(204);
  });
});
afterAll(async () => {
  await db.drop();
});
