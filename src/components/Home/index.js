import {Component} from 'react'
import Language from '../Language'
import ButtonText from '../ButtonText'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Home extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  clickTabItem = tabValue => {
    this.setState({activeId: tabValue})
  }

  getFilterLanguage = () => {
    const {activeId} = this.state
    const filterLanguage = languageGreetingsList.filter(
      eachLanguage => eachLanguage.id === activeId,
    )
    return filterLanguage
  }

  render() {
    const {activeId} = this.state
    const filterLanguage = this.getFilterLanguage()

    return (
      <div className="bg">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="list-button">
          {languageGreetingsList.map(each => (
            <ButtonText
              key={each.id}
              eachButton={each}
              clickTabItem={this.clickTabItem}
              isActive={each.id === activeId}
            />
          ))}
        </ul>
        <ul className="multi">
          {filterLanguage.map(each => (
            <Language key={each.id} itemDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
