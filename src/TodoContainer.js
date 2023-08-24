import React from 'react'

export const TodoContainer = ({todos, editingTodoId , upadteInputValue , handleInputUpdateChange , handleUpdateSubmit , handleCancelEdit ,handleDelete ,handleComplete, handleStartEdit }) => {
  return (
    <ul>
          {todos.map(todo => (
            <li
              key={todo.id}
              className={todo.completed ? 'completed' : ''}
            >
              <div className="task-item">
                {editingTodoId === todo.id ? (
                  <input
                    type="text"
                    value={upadteInputValue}
                    onChange={handleInputUpdateChange}
                  />
                ) : (
                  todo.text
                )}
              </div>
              <div className="buttons">
                {editingTodoId === todo.id ? (
                  <>
                    <button onClick={handleUpdateSubmit}>
                      <i className="fas fa-save"></i>
                    </button>
                    <button onClick={handleCancelEdit}>
                      <i className="fas fa-times"></i>
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleStartEdit(todo.id, todo.text)}>
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="delete-button" onClick={() => handleDelete(todo.id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                    <button onClick={() => handleComplete(todo.id)}>
                      <i className={`fas ${todo.completed ? 'fa-times-circle' : 'fa-check-circle'}`}></i>
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
  )
}
