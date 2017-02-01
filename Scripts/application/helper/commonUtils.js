angular
	.module('app.helper')
	.service('commonUtils', ['$state', function ($state) {
		function getNameFromTypeList(typeId, typeList) {
			var _typeList = _(typeList).findWhere({ id: typeId });
			return _typeList ? _typeList.name : undefined;
		}

		function getIdFromTypeList(typeName, typeList) {
			var _typeName = _(typeList).findWhere({ name: typeName });
			return _typeName ? _typeName.id : undefined;
		}

		function getFlagValue(flagValue, constantValue, optionsList) {
			//return optionsList[(flagValue && constantValue) > 0 ? 0 : 1];
			if ((flagValue & constantValue) > 0) {
				return optionsList[0];
			}
			else {
				return optionsList[1];
			}
		}

		function getNameFromId(Id, optionsList) {
			return optionsList[Id];
		}

		function getIdFromName(name, optionsList) {

			for (var i = 0; i < optionsList.length; i++) {
				if (name === optionsList[i])
					return i;
			}

		}

		/*  function setFlags(flags, flagFieldValue, constantValue, optionList)
		  {
		
			if (optionList[0] === flagFieldValue)
			  return (flags | constantValue);
			else
			  return flags;
		  }*/

		function setFlags(flags, flagFieldValue, constantValue, optionList) {

			if (optionList[0] === flagFieldValue)
				return (flags | constantValue);
			else
				return (flags & (~constantValue));
		}

		function getOperator(operator, optionsList) {
			if (operator === '=' || operator === 'Equals To') {
				return optionsList[0];
			}
			else if (operator === '!=' || operator === 'No Equals To') {
				return optionsList[1];
			}
			else if (operator === '>' || operator === 'Greater Than') {
				return optionsList[2];
			}
			else if (operator === '>=' || operator === 'Greater than or Equal To') {
				return optionsList[3];
			}
			else if (operator === '<' || operator === 'Less Than') {
				return optionsList[4];
			}
			else if (operator === '<=' || operator === 'Less than or Equal To') {
				return optionsList[5];
			}
		}

		return {
			getFlagValue: getFlagValue,
			setFlags: setFlags,
			getNameFromId: getNameFromId,
			getIdFromName: getIdFromName,
			getOperator: getOperator,
			getNameFromTypeList: getNameFromTypeList,
			getIdFromTypeList: getIdFromTypeList
		}
	}]);