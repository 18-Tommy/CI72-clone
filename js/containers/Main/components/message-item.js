class MessageItem {
	$container;

	$author;

	$subContainer;
	$content;
	$avatar;
	constructor() {
		this.$container = document.createElement('div');
		this.$container.classList.add('msg-item-container', 'd-flex');

		this.$author = document.createElement('div');
		this.$author.classList.add('author-item', 'd-flex');
		this.$author.innerText = 'Something Author';

		this.$subContainer = document.createElement('div');
		this.$subContainer.classList.add('msg-item-sub-container', 'd-flex');

		this.$content = document.createElement('div');
		this.$content.classList.add('content-item', 'd-flex');
		this.$content.innerText = 'Something content';

		this.$avatar = document.createElement('div');
		this.$avatar.classList.add('avatar-item', 'd-flex');
		this.$avatar.style.backgroundImage = `url(https://picsum.photos/200/300)`;
	}
	render() {
		this.$container.append(
			this.$author,
			this.$subContainer,
			this.$avatar,
			this.$content
		);
		return this.$container;
	}
}
export default MessageItem;
