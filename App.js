import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

class Botao extends Component {
	constructor(props) {
		super(props)
		this.state = {}

		let cor = props.color === null ? '#FF0000' : this.props.color

		this.styles = StyleSheet.create({
			button: {
				height: 50,
				width: 250,
				borderWidth: 2,
				borderColor: cor,
				borderRadius: 25,

			},
			buttonArea: {
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center'
			},
			textButton: {
				color: cor,
				fontSize: 14,
				fontWeight: 'bold',
			}
		})
	}
	render() {
		return (
			<TouchableOpacity style={this.styles.button} onPress={this.props.onPress}>
				<View style={this.styles.buttonArea}>
					<Text style={this.styles.textButton}>{this.props.texto}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}


export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = { frase: 'Frase do dia...' }
		this.frases = ['A vida trará coisas boas se tiveres paciência.', 'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.', 'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 'A maior de todas as torres começa no solo.', 'Não há que ser forte. Há que ser flexível.', 'Gente todo dia arruma os cabelos, por que não o coração?']

		this.quebrarBiscoito = this.quebrarBiscoito.bind(this)
	}
	quebrarBiscoito() {
		let s = this.state
		let r = Math.floor(Math.random() * this.frases.length)

		s.frase = this.frases[r]
		this.setState(s)
	}

	render() {
		return (
			<View style={styles.body}>
				<Image source={require('./images/cookie.png')}></Image>
				<Text style={styles.msgText}>"{this.state.frase}"</Text>
				<Botao color='#B59619' texto='Quebrar Biscoito' onPress={this.quebrarBiscoito}></Botao>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	body: {
		paddingTop: 20,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	msgText: {
		fontSize: 20,
		color: '#B59619',
		margin: 30,
		fontStyle: 'italic',
		textAlign: 'center',
	}
})