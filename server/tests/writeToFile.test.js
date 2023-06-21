const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const { writeToFile } = require('../controllers/writeToFile');

// Mock the fs.write function
fs.write = (filePath, content, callback) => {
  // Simulate a successful write
  callback(null);
};

describe('writeToFile', () => {
  afterEach(() => {
    // Clear the mock function's call history
    fs.write.resetHistory();
  });

  it('should write the content to the file', () => {
    const directory = 'test-directory';
    const content = 'Test content';

    writeToFile(directory, content);

    // Verify that fs.write was called with the correct arguments
    expect(fs.write.calledOnce).to.be.true;
    expect(fs.write.firstCall.args[0]).to.equal(path.join(__dirname, directory));
    expect(fs.write.firstCall.args[1]).to.equal(content);
    expect(fs.write.firstCall.args[2]).to.be.a('function');
  });

  it('should log success message when write is successful', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    const directory = 'test-directory';
    const content = 'Test content';

    writeToFile(directory, content);

    // Verify that the success message is logged
    expect(consoleLogSpy.calledWith('File written successfully!')).to.be.true;

    // Restore the original console.log function
    consoleLogSpy.restore();
  });

  it('should log error message when write encounters an error', () => {
    const consoleErrorSpy = sinon.spy(console, 'error');
    const directory = 'test-directory';
    const content = 'Test content';
    const error = new Error('Write error');

    // Mock the fs.write function to simulate an error
    fs.write = (filePath, content, callback) => {
      callback(error);
    };

    writeToFile(directory, content);

    // Verify that the error message is logged
    expect(consoleErrorSpy.calledWith('Error writing to file:', error)).to.be.true;

    // Restore the original console.error function
    consoleErrorSpy.restore();
  });
});
