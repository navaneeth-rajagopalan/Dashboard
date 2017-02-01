angular
	.module('app.helper')
	.service('dataService', ['utils', function (utils) {
		function newCard(data, card) {
			var _newCard = angular.copy(card);
			_newCard.id = card.id || utils.newGuid();
			_newCard.active = card.active === true;
			_newCard.timestamp = new Date();
			data.unshift(_newCard);
			return _newCard;
		}

		function getCard(data, id) {
			return _(data).findWhere({ id: id });
		}

		function getCard2(data, key, value) {
			return _(data).find(function (item) {
				return item[key] === value;
			});
		}

		function getActiveCard(data) {
			return _(data).findWhere({ active: true });
		}

		function setActiveCard(data, id) {
			// clear old active flag
			var oldActiveCard = _(data).findWhere({ active: true });
			if (!!oldActiveCard) {
				oldActiveCard.active = false;
			}
			// set new active card
			var card = _(data).findWhere({ id: id });
			card.active = true;

			return card;
		}

		function updateCard(data, card) {
			var _card = getCard(data, card.id);
			_.extend(_card, card);
			return _card
		}

		return {
			newCard: newCard,
			getCard: getCard,
			getCard2: getCard2,
			getActiveCard: getActiveCard,
			updateCard: updateCard,
			setActiveCard: setActiveCard
		};
	}]);