export default class Choices{
    constructor(choice){
         
        this.options = {
            rock : {
                "name": "rock",
                "win": ["scissors", "lizard"],
                "lose": ["paper", "spock"], // Just here for context
                "img": "icon-rock.svg",
                "color": "#E32636" // Red
            },
            
            paper : {
                "name": "paper",
                "win": ["rock", "spock"],
                "lose": ["scissors", "lizard"],
                "img": "icon-paper.svg",
                "color": "#3457D5" // Blue
            },
            
            scissors : {
                "name": "scissors",
                "win": ["paper", "lizard"],
                "lose": ["rock", "spock"],
                "img": "icon-scissors.svg",
                "color": "#FFD700" // Yellow
            },

            lizard : {
                "name": "lizard",
                "win": ["spock", "paper"],
                "lose": ["rock", "scissors"],
                "img": "icon-lizard.svg",
                "color": "#662d91" // Purple
            },

            spock : {
                "name": "spock",
                "win": ["scissors", "rock"],
                "lose": ["paper", "lizard"],
                "img": "icon-spock.svg",
                "color": "teal" // Teal

            }
        }
    
        this.optionList = [
            "rock", "paper", "scissors", "lizard", "spock"
        ]
        
    }
}