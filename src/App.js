import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      modOpen: false,
    }
  }

  openModal = (event) => {
    event.preventDefault()
    this.setState({
      modOpen: true,
    })
  }

  renderModal = () => (
    <div className='overlay'>
      <div className='container-modal'>
        <p className="TextModal">para fechar clique no botão abaixo</p>
        <button className="ClickModal" onClick={() => this.setState({modOpen: false})}>fechar modal</button>
      </div>
    </div>
  )

  render() {
    return (
      <div className="App">
        <form className='box-form' onSubmit={this.openModal}>
          <p className="Text">o modal só abre clicando no botão</p>
          <button className="Click">abrir modal</button>
        </form>
        {this.state.modOpen ? this.renderModal() : null}
      </div>
    );
  }
  }

export default App;
