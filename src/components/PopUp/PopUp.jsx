import React, { useState } from 'react';

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
  },
  popup: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  content: {
    padding: '20px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '24px',
  },
  inputGroup: {
    marginBottom: '24px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '4px',
    color: '#374151',
  },
  input: {
    width: '100%',
    padding: '8px 0',
    border: 'none',
    borderBottom: '1px solid #d1d5db',
    outline: 'none',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '8px 0',
    border: 'none',
    borderBottom: '1px solid #d1d5db',
    outline: 'none',
    resize: 'vertical',
    minHeight: '80px',
    fontSize: '16px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '8px',
    marginTop: '250px',
  },
  button: {
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
  },
  cancelButton: {
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    color: '#374151',
  },
  saveButton: {
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
  },
};

const TaskPopup = ({ action, taskData, onSave, onClose }) => {
  const [title, setTitle] = useState(taskData?.title || '');
  const [description, setDescription] = useState(taskData?.description || '');

  const isView = action === 'view';
  const isAdd = action === 'add';
  const isEdit = action === 'edit';

  const handleSave = () => {
    if (!isView) onSave({ title, description });
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <div style={styles.content}>
          <h2 style={styles.title}>
            {isAdd ? 'Add Task' : isEdit ? 'Edit Task' : 'View Task'}
          </h2>

          {!isView ? (
            <>
              <div style={styles.inputGroup}>
                <label htmlFor="title" style={styles.label}>Title</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={styles.input}
                  placeholder="Enter task title"
                  readOnly={isView}
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="description" style={styles.label}>Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={styles.textarea}
                  placeholder="Enter task description"
                  readOnly={isView}
                />
              </div>
            </>
          ) : (
            <div>
              <p><strong>Title:</strong> {title}</p>
              <p><strong>Description:</strong> {description}</p>
              <p><strong>Created at:</strong></p>

            </div>
          )}

          <div style={styles.buttonContainer}>
            <button
              onClick={onClose}
              style={{ ...styles.button, ...styles.cancelButton }}
            >
              {isView ? 'Close' : 'Cancel'}
            </button>
            {!isView && (
              <button
                onClick={handleSave}
                style={{ ...styles.button, ...styles.saveButton }}
              >
                {isAdd ? 'Add Task' : 'Save Changes'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPopup;
