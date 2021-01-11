const bakingTools = [
  {
    name: 'no bake pudding',
    price: 0,
    wage: 1
  },
  {
    name: 'an easy bake oven',
    price: 5,
    wage: 5
  },
  {
    name: 'an old toaster oven',
    price: 25,
    wage: 50
  },
  {
    name: 'a convection oven',
    price: 250,
    wage: 100
  },
  {
    name: 'a factory',
    price: 500,
    wage: 250
  }
]


//>>>>>>>>>>>>>>>>>>>>
//  REACT
//>>>>>>>>>>>>>>>>>>>>


class App extends React.Component {
  state = {
      currentTool: bakingTools.shift(),
      bankAccount: 0,
      text: "",
      showButtons: true,
  }
startBtn() {
      return {
        text:`A humble baker\'s beginning, let\'s make money`,
        showStatus(state)
        bake(state)
      }
  }
showStatus() {
    this.setState(() => {
      return {
        text:`Current product used to make money: ${this.currentTool.name} & Current bank account: $${this.bankAccount}`
      }
    })

  }

buyTool() {
    this.setState((state) => {
      let playerChoice
      return {
          text: `What would you like to do?<br/>
          Next available tool: ${bakingTools[0].name} ($${bakingTools[0].price}) Your bank account: $${this.bankAccount}`,
        // if(`${this.bankAccount} > 500 && ${this.bankAccount} < 1000`)
        //   playerChoice = prompt(`No more upgrades available, keep baking goods until your bank account hits $1000`, "bake")
        // }
        // if(playerChoice.toLowerCase() === 'bake') {
        //   bake()
        // } else if (playerChoice.toLowerCase() === 'buy new tool' && bakingTools.length > 0) {
        //   buyTool()
        // } else {
        //   alert('Not an available option, please try again :)')
        //   action()
        }
      }
    })
  }
  bake(){
    this.setState((state) => {
      return {
        bankAccount: state.bankAccount + state.currentTool.wage,
        text:`Lets start baking! You used ${state.currentTool.name} to make a total of $ ${state.currentTool.wage} for the day!`
      }
    });
  }

  render() {
    return (
      <div className="wrapper">
      <div className="start">
        <button onClick={() => this.startBtn()}>START GAME</button>
      </div>
      <div className="stats">
        <div id="interact">
          {this.state.text}
          {this.state.showButtons ? (<button>{this.currentTool.name}</button>) : (null)}
        </div>
      </div>
      <MyComponent/>
    </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
