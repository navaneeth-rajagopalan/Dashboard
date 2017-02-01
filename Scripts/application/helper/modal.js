angular
	.module('app.helper')
	.service('modal', ['$http', '$templateCache', '$compile', '$q',
		function ($http, $templateCache, $compile, $q) {
			var modalCommentUrl = 'Scripts/application/helper/modal-comment.html',
				modalErrorUrl = 'Scripts/application/helper/modal_error.html';
			$http.get(modalCommentUrl, { cache: $templateCache });
			$http.get(modalErrorUrl, { cache: $templateCache });

			function showModal(modal, controller) {
				var def = $q.defer(),
					$template = $($templateCache.get(modal)[1]);
				$template.appendTo('body');
				$compile($template.contents())(controller);
				$template.modal('show');
				$template.on('hidden.bs.modal', function (e) {
					$template.remove();
					def.resolve(controller);
				});
				return def.promise;
			}

			function comment(scope, message) {
				if (!scope.continueAction) {
					scope.continueAction = function () {
						// do sthing
					}
				}

				return showModal(modalCommentUrl, _(scope).extend({
					comment: message
				}));
			}

			function error(scope, errorMessage) {
				return showModal(modalErrorUrl, _(scope).extend({
					errorMessage: errorMessage
				}));
			}

			return {
				comment: comment,
				error: error
			};
		}]);