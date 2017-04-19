import React from 'react'
import Colors from '../constants/Colors'
import Styles from '../styles/PersonList'
import PersonListView from '../components/PersonListView'

class PersonList extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [{
          name: 'Camila Cinalli',
          avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vicente Lopez',
        }, {
          name: 'Araceli Fulles',
          avatar_url:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'San Martin',
      }],
    }
  }

  handlePress = (person) => {
    this.props.navigator.push('PersonDetail', {
      name: person.name,
      subtitle: person.subtitle,
    })
  }

  static route = {
    navigationBar: {
      title: 'Personas',
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      tintColor: '#fff',
    },
  }

  render() {
    return (
      <PersonListView
        colors={Colors}
        styles={Styles}
        list={this.state.list}
        handlePress={this.handlePress}
      />
    )
  }
}

export default PersonList
