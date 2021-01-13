import React from 'react'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: ['Apple', 'Orenge', 'Pear']
    }
  }
  render () {
    return (
      <>
        <ListView items={this.state.items} />
      </>
    )
  }
}
const ListView = props => (
  <ul>
    props.items.map(item => <Item item={item} />
    )}
  </ul>
)

const Item = props => <li>{props.item}</li>

export default Main
