
import { useState, useEffect } from 'react'

// Setup tile ids.
let tileIds = []
let idToInsert = ""
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    idToInsert = i.toString() + j.toString()
    
    tileIds.push(idToInsert)
  }
}

const SudokuSolver = () => {

  const [puzzleInvalid, setpuzzleInvalid] = useState(0)
  const [puzzleSolved, setpuzzleSolved] = useState(0)

  const clear = () => {
    let searchId = ""
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        searchId = (i+1).toString() + (j+1).toString()
        document.getElementById(searchId).value = ""
      }
    }
    setpuzzleInvalid(0)
    setpuzzleSolved(0)
  }

  const solve = () => {
    let matrix = [[[], [], [], [], [], [], [], [], []],
                  [[], [], [], [], [], [], [], [], []],
                  [[], [], [], [], [], [], [], [], []],
                  [[], [], [], [], [], [], [], [], []],
                  [[], [], [], [], [], [], [], [], []],
                  [[], [], [], [], [], [], [], [], []],
                  [[], [], [], [], [], [], [], [], []],
                  [[], [], [], [], [], [], [], [], []],
                  [[], [], [], [], [], [], [], [], []]]
    
    let searchId = ""
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        searchId = i.toString() + j.toString()
        if (document.getElementById(searchId).value == "") {
          matrix[i-1][j-1].push(0)
        } else {
          matrix[i-1][j-1].push(parseInt(document.getElementById(searchId).value))
        }
      }
    }

    fetch("https://v4q626ahomlzl3hkw7u7nwhbny0artpn.lambda-url.ap-southeast-2.on.aws?matrix="+JSON.stringify(matrix))
      .then(res => res.json())
      .then(solved_matrix => {
        
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {
            if (solved_matrix[i][j].length > 1) {
              setpuzzleInvalid(1)
              return
            }
          }
        }

        for (let i = 1; i < 10; i++) {
          for (let j = 1; j < 10; j++) {
            searchId = i.toString() + j.toString()
            document.getElementById(searchId).value = solved_matrix[i-1][j-1][0]
          }
        }
        setpuzzleSolved(1)
      })

  }

  return (
    <div className="container w-75" style={{marginTop: '30px', backgroundColor: 'white', opacity: '0.8', height: '600px'}}>
      <div className="row" style={{height: '20px'}}></div>
      <div className="row p-3" style={{fontSize: '28px'}}>
        <div className="col-3"></div>
        <div className="col d-flex justify-content-center">
          Enter your Sudoku puzzle into the table below. Click "Solve!" to see the solution..!
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row" style={{height: '60px'}}></div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3 d-flex align-items-center">
          <button style={{marginLeft: '-60px'}} onClick={solve}>Solve</button>
          <button style={{marginLeft: '50px'}} onClick={clear}>Clear</button>
        </div>
        <div className="col-4">
          <form action="" style={{width: '330px'}}>
            {tileIds.map((tileId) => (
              <input key={tileId} type="text" id={tileId} maxLength="1" style={{height: '35px', width: '35px', textAlign: 'center'}}></input>
            ))}
          </form>
        </div>
        {/* <div className="col-4">
          <form action="" style={{width: '330px'}}>
            {tileIds.map((tileId) => (
              <input key={'s'+tileId} type="text" id={'s'+tileId} maxLength="1" style={{height: '35px', width: '35px', textAlign: 'center'}}></input>
            ))}
          </form>
        </div> */}
        
      </div>
      <div className="row" style={{padding: '30px'}}>
        <div className="col d-flex justify-content-center">
          {puzzleInvalid ? <p style={{color: 'red', fontSize: '26px'}}>ERROR: puzzle invalid</p> : ''}
          {puzzleSolved ? <p style={{color: 'red', fontSize: '26px'}}>Solved!</p> : ''}
        </div>
      </div>
    </div>
  )
}

export default SudokuSolver
