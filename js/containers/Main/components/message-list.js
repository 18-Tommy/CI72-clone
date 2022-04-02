import MessageItem from './message-item.js';

class MessageList {
	$container;

	$title;

	$listItem;

	$activeConversation;
	constructor(cons) {
		this.$activeConversation = cons;

		this.$container = document.createElement('div');
		this.$container.classList.add('message-container', 'd-flex');

		this.$title = document.createElement('div');
		this.$title.classList.add('list-title');
		this.$title.innerText = cons.name;

		this.$listItem = document.createElement('div');
		this.$listItem.classList.add('list-container', 'd-flex');
	}

	unMount = () => {
		this.$container.remove();
	};

	render() {
		const item = new Array(10).fill(1).map(() => new MessageItem().render());
		this.$listItem.append(...item);
		this.$container.append(this.$title, this.$listItem);
		return this.$container;
	}
}

export default MessageList;
