function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Notifications/addnotifications/addnotifications.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/Notifications/addnotifications/addnotifications.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AddnotificationsComponent */

  /***/
  function srcAppNotificationsAddnotificationsAddnotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddnotificationsComponent", function () {
      return AddnotificationsComponent;
    });
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_Notifications_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Notifications/services/notification.service */
    "./src/app/Notifications/services/notification.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function AddnotificationsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Notifications");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddnotificationsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update Notification");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddnotificationsComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the Heading . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddnotificationsComponent_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the Content . ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var AddnotificationsComponent = /*#__PURE__*/function () {
      function AddnotificationsComponent(fb, serviceNotification, dialogRef, idNotification) {
        _classCallCheck(this, AddnotificationsComponent);

        this.fb = fb;
        this.serviceNotification = serviceNotification;
        this.dialogRef = dialogRef;
        this.idNotification = idNotification;
        this.regiForm = this.fb.group({
          'aheading': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          'content': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(AddnotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.idNotification) {
            this.serviceNotification.getAllNotifications().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (notifications) {
              return _this.serviceNotification.getNotificationbyId(_this.idNotification.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (notification) {
                return [notifications, notification];
              }));
            })).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  notifications = _ref2[0],
                  notification = _ref2[1];

              _this.notifications = notifications;
              _this.notification = notification;

              _this.initalizeNotification(notification);
            });
          }
        }
      }, {
        key: "initalizeNotification",
        value: function initalizeNotification(notification) {
          this.regiForm = this.fb.group({
            'aheading': [notification ? notification.aheading : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'content': [notification ? notification.content : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this2 = this;

          console.log(form);

          if (this.regiForm.valid) {
            var notification = {
              id: this.idNotification ? this.idNotification.id : '',
              aheading: form.aheading,
              content: form.content
            };

            if (!this.idNotification) {
              this.serviceNotification.AddNotification(notification).then(function () {
                _this2.dialogRef.close();
              });
            } else {
              this.serviceNotification.updateNotification(notification).then(function () {
                _this2.dialogRef.close();
              });
            }
          }
        }
      }]);

      return AddnotificationsComponent;
    }();

    AddnotificationsComponent.ɵfac = function AddnotificationsComponent_Factory(t) {
      return new (t || AddnotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Notifications_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
    };

    AddnotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddnotificationsComponent,
      selectors: [["app-addnotifications"]],
      decls: 24,
      vars: 6,
      consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "table"], [1, "field"], ["formControlName", "aheading", "matInput", "", "name", "aheading", "placeholder", "Heading"], ["formControlName", "content", "matInput", "", "name", "content", "matTextareaAutosize", "", "matAutosizeMinRows", "2", "matAutosizeMaxRows", "5", "placeholder", "Content"], [1, "content-center"], ["mat-raised-button", "", "color", "accent", 3, "disabled"]],
      template: function AddnotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddnotificationsComponent_div_3_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddnotificationsComponent_div_4_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddnotificationsComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit(ctx.regiForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddnotificationsComponent_span_13_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "textarea", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddnotificationsComponent_span_19_Template, 2, 0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.notification);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notification);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.regiForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.regiForm.get("aheading").valid && ctx.regiForm.get("aheading").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.regiForm.get("content").valid && ctx.regiForm.get("content").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.regiForm.valid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatTextareaAutosize"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL05vdGlmaWNhdGlvbnMvYWRkbm90aWZpY2F0aW9ucy9hZGRub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddnotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-addnotifications',
          templateUrl: './addnotifications.component.html',
          styleUrls: ['./addnotifications.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_Notifications_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Notifications/notification/notification.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/Notifications/notification/notification.component.ts ***!
    \**********************************************************************/

  /*! exports provided: NotificationComponent */

  /***/
  function srcAppNotificationsNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
      return NotificationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Notifications_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../Notifications/services/notification.service */
    "./src/app/Notifications/services/notification.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NotificationComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notification_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", notification_r1.aheading, ": ", notification_r1.content, " ");
      }
    }

    var NotificationComponent = /*#__PURE__*/function () {
      function NotificationComponent(serviceNotification) {
        _classCallCheck(this, NotificationComponent);

        this.serviceNotification = serviceNotification;
      }

      _createClass(NotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.serviceNotification.getAllNotifications().subscribe(function (notifications) {
            _this3.notifications = notifications;
            console.log(_this3.notifications);
          });
        }
      }]);

      return NotificationComponent;
    }();

    NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
      return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Notifications_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]));
    };

    NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationComponent,
      selectors: [["app-notification"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [1, "topRightShadowBlur", "fade-in"]],
      template: function NotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NotificationComponent_div_0_Template, 4, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["div.background[_ngcontent-%COMP%] {\n    background-color:white;\n    border: 2px solid black;\n  }\n  \n  div.transbox[_ngcontent-%COMP%] {\n    margin: 30px;\n    background-color: #ffffff;\n    border: 1px solid black;\n    opacity: 0.6;\n  }\n  \n  div.topRightShadowBlur[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 5%;\n    font-weight: bold;\n    color: #000000;\n  }\n  \n  .topRightShadowBlur[_ngcontent-%COMP%]\n{\n  margin: 30px;\n  \n  border: solid 1px #555;\n  background-color: rgb(199, 222, 243);\n  box-shadow: 10px -10px 5px rgba(0,0,0,0.6);\n  -moz-box-shadow: 10px -10px 5px rgba(0,0,0,0.6);\n  -webkit-box-shadow: 10px -10px 5px rgba(0,0,0,0.6);\n  -o-box-shadow: 10px -10px 5px rgba(0,0,0,0.6);\n}\n  \n  .fade-in[_ngcontent-%COMP%]{\n  -webkit-animation:fadeIn 6s;\n          animation:fadeIn 6s;\n}\n  \n  @-webkit-keyframes fadeIn{\n  from{\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n  \n  @keyframes fadeIn{\n  from{\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUNBOztFQUVBLFlBQVk7O0VBRVosc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQywwQ0FBMEM7RUFDMUMsK0NBQStDO0VBQy9DLGtEQUFrRDtFQUNsRCw2Q0FBNkM7QUFDL0M7O0VBQ0E7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztFQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztFQVBBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvTm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgfVxuICBcbiAgZGl2LnRyYW5zYm94IHtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cbiAgXG4gIGRpdi50b3BSaWdodFNoYWRvd0JsdXIgcCB7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuICAudG9wUmlnaHRTaGFkb3dCbHVyXG57XG4gIG1hcmdpbjogMzBweDtcbiAgXG4gIGJvcmRlcjogc29saWQgMXB4ICM1NTU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDIyMiwgMjQzKTtcbiAgYm94LXNoYWRvdzogMTBweCAtMTBweCA1cHggcmdiYSgwLDAsMCwwLjYpO1xuICAtbW96LWJveC1zaGFkb3c6IDEwcHggLTEwcHggNXB4IHJnYmEoMCwwLDAsMC42KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IC0xMHB4IDVweCByZ2JhKDAsMCwwLDAuNik7XG4gIC1vLWJveC1zaGFkb3c6IDEwcHggLTEwcHggNXB4IHJnYmEoMCwwLDAsMC42KTtcbn1cbi5mYWRlLWlue1xuICBhbmltYXRpb246ZmFkZUluIDZzO1xufVxuQGtleWZyYW1lcyBmYWRlSW57XG4gIGZyb217XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notification',
          templateUrl: './notification.component.html',
          styleUrls: ['./notification.component.css']
        }]
      }], function () {
        return [{
          type: _Notifications_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Notifications/services/notification.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Notifications/services/notification.service.ts ***!
    \****************************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppNotificationsServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");

    var NotificationService = /*#__PURE__*/function () {
      function NotificationService(db) {
        _classCallCheck(this, NotificationService);

        this.db = db;
        this.notification = db.list('/notifications');
        this.notifications = this.notification.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
          return changes.map(function (c) {
            return Object.assign({
              key: c.payload.key
            }, c.payload.val());
          });
        }));
      }

      _createClass(NotificationService, [{
        key: "getAllNotifications",
        value: function getAllNotifications() {
          return this.notifications;
        }
      }, {
        key: "AddNotification",
        value: function AddNotification(notifications) {
          return this.db.list('/notifications/').push({
            aheading: notifications.aheading,
            content: notifications.content
          });
        }
      }, {
        key: "getNotificationbyId",
        value: function getNotificationbyId(uid) {
          return this.db.object('/notifications/' + uid).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (notification) {
            var obj = notification.payload.val();
            var notificationTemp = {
              id: notification.key,
              aheading: obj.aheading,
              content: obj.content
            };
            return notificationTemp;
          }));
        }
      }, {
        key: "updateNotification",
        value: function updateNotification(notifications) {
          return this.db.object('/notifications/' + notifications.id).update({
            aheading: notifications.aheading,
            content: notifications.content
          });
        }
      }, {
        key: "deleteNotification",
        value: function deleteNotification(id) {
          return this.db.object('/notifications/' + id).remove();
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]));
    };

    NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _Notifications_addnotifications_addnotifications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../Notifications/addnotifications/addnotifications.component */
    "./src/app/Notifications/addnotifications/addnotifications.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Notifications_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Notifications/services/notification.service */
    "./src/app/Notifications/services/notification.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function AdminComponent_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Heading ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AdminComponent_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r8.aheading, " ");
      }
    }

    function AdminComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Content ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AdminComponent_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r9.content, " ");
      }
    }

    function AdminComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AdminComponent_td_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_td_12_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var row_r10 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.Edit(row_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_td_12_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var row_r10 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r13.Delete(row_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AdminComponent_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 17);
      }
    }

    function AdminComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 18);
      }
    }

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(serviceNotification, serviceDialog) {
        _classCallCheck(this, AdminComponent);

        this.serviceNotification = serviceNotification;
        this.serviceDialog = serviceDialog;
        this.displayedColumns = ['aheading', 'content', 'actions'];
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.serviceNotification.getAllNotifications().subscribe(function (notifications) {
            return _this4.notifications = notifications;
          });
        }
      }, {
        key: "AddNotification",
        value: function AddNotification() {
          this.serviceDialog.open(_Notifications_addnotifications_addnotifications_component__WEBPACK_IMPORTED_MODULE_0__["AddnotificationsComponent"], {
            width: '650px'
          });
        }
      }, {
        key: "Edit",
        value: function Edit(row) {
          this.serviceDialog.open(_Notifications_addnotifications_addnotifications_component__WEBPACK_IMPORTED_MODULE_0__["AddnotificationsComponent"], {
            width: '650px',
            data: {
              id: row.key
            }
          });
        }
      }, {
        key: "Delete",
        value: function Delete(row) {
          if (window.confirm('Kar doon,pakka?')) this.serviceNotification.deleteNotification(row.key);
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Notifications_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 15,
      vars: 3,
      consts: [["mat-raised-button", "", 1, "course-button", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "aheading"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 15%;", 4, "matCellDef"], ["matColumnDef", "content"], ["mat-cell", "", "style", "width: 85%;", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 2, "width", "15%"], ["mat-cell", "", 2, "width", "85%"], ["mat-icon-button", "", "matTooltip", "Click to Edit", "color", "primary", 1, "iconbutton", 3, "click"], ["aria-label", "Edit"], ["mat-icon-button", "", "matTooltip", "Click to Delete", "color", "warn", 1, "iconbutton", 3, "click"], ["aria-label", "Delete"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_0_listener() {
            return ctx.AddNotification();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdminComponent_th_5_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminComponent_td_6_Template, 2, 1, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminComponent_th_8_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdminComponent_td_9_Template, 2, 1, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AdminComponent_th_11_Template, 2, 0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AdminComponent_td_12_Template, 7, 0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AdminComponent_tr_13_Template, 1, 0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdminComponent_tr_14_Template, 1, 0, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.notifications);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.css']
        }]
      }], function () {
        return [{
          type: src_app_Notifications_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _Notifications_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Notifications/notification/notification.component */
    "./src/app/Notifications/notification/notification.component.ts");
    /* harmony import */


    var _exam_exam_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./exam/exam.component */
    "./src/app/exam/exam.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mainpage/mainpage.component */
    "./src/app/mainpage/mainpage.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'navbar',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }, {
      path: 'mainpage',
      component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_4__["MainpageComponent"]
    }, {
      path: 'admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    }, {
      path: 'notification',
      component: _Notifications_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__["NotificationComponent"]
    }, {
      path: 'exam',
      component: _exam_exam_component__WEBPACK_IMPORTED_MODULE_1__["ExamComponent"]
    }, {
      path: 'navbar',
      component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(db) {
      var _this5 = this;

      _classCallCheck(this, AppComponent);

      this.db = db;
      db.list('/notifications').valueChanges().subscribe(function (notification) {
        _this5.notification = notification;
        console.log(notification);
      });
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _material_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./material-ui.module */
    "./src/app/material-ui.module.ts");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/analytics */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./mainpage/mainpage.component */
    "./src/app/mainpage/mainpage.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _Notifications_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Notifications/notification/notification.component */
    "./src/app/Notifications/notification/notification.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _exam_exam_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./exam/exam.component */
    "./src/app/exam/exam.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _Notifications_addnotifications_addnotifications_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./Notifications/addnotifications/addnotifications.component */
    "./src/app/Notifications/addnotifications/addnotifications.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts"); //import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _material_ui_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_23__["CarouselModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_13__["MainpageComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _Notifications_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"], _exam_exam_component__WEBPACK_IMPORTED_MODULE_18__["ExamComponent"], _Notifications_addnotifications_addnotifications_component__WEBPACK_IMPORTED_MODULE_20__["AddnotificationsComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _material_ui_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_23__["CarouselModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_13__["MainpageComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _Notifications_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"], _exam_exam_component__WEBPACK_IMPORTED_MODULE_18__["ExamComponent"], _Notifications_addnotifications_addnotifications_component__WEBPACK_IMPORTED_MODULE_20__["AddnotificationsComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _material_ui_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_23__["CarouselModule"].forRoot()],
          providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");

    function DashboardComponent_ng_template_0_div_1_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r5 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r5.displayName);
      }
    }

    var _c0 = function _c0() {
      return {
        backgroundImage: "url(./assets/tech.jpg)"
      };
    };

    var _c1 = function _c1() {
      return {
        backgroundImage: "url(./assets/webdev.png)"
      };
    };

    var _c2 = function _c2() {
      return {
        backgroundImage: "url(./assets/marketing.jpg)"
      };
    };

    function DashboardComponent_ng_template_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_0_div_1_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.myFunction();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " HOME ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ABOUT ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " SERVICES ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " CONTACT ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " MORE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_0_div_1_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.onClickMe();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_0_div_1_Template_button_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.auth.signOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DashboardComponent_ng_template_0_div_1_div_47_Template, 6, 1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "College Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "College City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_0_div_1_Template_button_click_70_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.ch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "carousel", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Technical");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Reading");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Material ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "APP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "ly ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Marketing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Reading");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Material ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "APP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "ly ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Non-Technical");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Reading");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Material ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "APP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "ly ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r3 = ctx.ngIf;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", user_r3.displayName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r3.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 10, ctx_r2.auth.user$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r3.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.kMessage, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pauseOnFocus", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
      }
    }

    var _c3 = function _c3() {
      return {
        backgroundImage: "url(./assets/dashboard-bg.jpg)"
      };
    };

    function DashboardComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_template_0_div_1_Template, 148, 15, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r1.auth.user$));
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(firestore, auth, afStorage, afs) {
        _classCallCheck(this, DashboardComponent);

        this.firestore = firestore;
        this.auth = auth;
        this.afStorage = afStorage;
        this.afs = afs;
        this.i = 1;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
        this.clickMessage = '';
        this.kMessage = '';
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "check",
        value: function check() {
          var user = firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
          var photu = user.photoURL;
          console.log(photu);
        }
      }, {
        key: "onClickMe",
        value: function onClickMe() {
          //this.clickMessage = 'You are my hero!';
          document.getElementById("user-name").style.visibility = "visible";
          document.getElementById("user-email").style.visibility = "visible";
          document.getElementById("clg-name").style.visibility = "visible";
          document.getElementById("clg-city").style.visibility = "visible";
          document.getElementById("choose-file").style.visibility = "visible"; //(change)="auth.upload($event)"
        }
      }, {
        key: "ch",
        value: function ch() {
          /*this.fb.getDataArr('users','value',{limitToFirst:2}).then((v)=>{
            console.log(v)
            
          });*/
          //console.log(value);
          //console.log(c);
          //let c:string = value;
          //console.log(value.type)
          //var value = document.getElementById("txtt")
          var user = firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
          var nameu = document.getElementById("namet").value;
          var emailu = document.getElementById("emailt").value;
          var photou = document.getElementById("choose-file").value;
          var clgnameu = document.getElementById("clg-namet").value;
          var clgcityu = document.getElementById("clg-cityt").value;
          var save = user.uid;
          console.log("users/" + save);

          if (clgnameu) {
            var docref = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().doc("users/" + save);
            docref.update({
              CollegeName: clgnameu
            }).then(function () {
              console.log("success");
            })["catch"](function (error) {
              console.log("error", error);
            });
          }

          if (clgcityu) {
            var docref = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().doc("users/" + save);
            docref.update({
              CollegeCity: clgcityu
            }).then(function () {
              console.log("success");
            })["catch"](function (error) {
              console.log("error", error);
            });
          } //console.log(docref)


          console.log(clgnameu);

          if (nameu && photou) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              user.updateProfile({
                displayName: nameu,
                photoURL: photou //photoURL: unit1

              });

              if (user) {
                console.log(user);
              } else {}
            });
          } else if (nameu && !photou) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              user.updateProfile({
                displayName: nameu,
                photoURL: user.photoURL //photoURL: unit1

              });

              if (user) {
                console.log(user);
              } else {}
            });
          } else if (!nameu && photou) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              user.updateProfile({
                displayName: user.displayName,
                photoURL: photou //photoURL: unit1

              });

              if (user) {
                console.log(user);
              } else {}
            });
          } else {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              user.updateProfile({
                displayName: user.displayName,
                photoURL: user.photoURL //photoURL: unit1

              });

              if (user) {
                console.log(user);
              } else {}
            });
          } //console.log()

          /*if(emailu)
          {
          firebase.auth().onAuthStateChanged(function (user) {
                    user.updateEmail(emailu).then(function() {
              // Update successful.
            }).catch(function(error) {
              // An error happened.
              console.log(error)
            });
            });
          }
          var save  = user.uid;
          var docref = firebase.firestore().doc("users/"+ save);
          if(clgnameu)
          {
          docref.set(
            {
          CollegeName: clgnameu
            }
          )
          
          console.log(clgnameu)
          }*/

        }
      }, {
        key: "myFunction",
        value: function myFunction() {
          var check = document.getElementById("navi").style.visibility;
          document.getElementById("togbutton").classList.toggle("change");
          if (this.i % 2) document.getElementById("navi").style.visibility = "visible";
          if (this.i % 2 == 0) document.getElementById("navi").style.visibility = "hidden";
          this.i++;
          console.log(this.i % 2);
        }
      }, {
        key: "navbar",
        value: function navbar() {
          document.getElementById("navi").style.visibility = "visible";
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 2,
      vars: 0,
      consts: [["authenticated", ""], [1, "bset", 3, "ngStyle"], [4, "ngIf"], ["id", "togbutton", 1, "container", 3, "click"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["id", "navi"], ["href", "#"], [1, "dashi"], [2, "color", "#fff"], [2, "color", "whitesmoke"], [1, "user-p", 3, "src"], [1, "fa", "fa-envelope", 2, "font-size", "24px", "color", "whitesmoke"], [1, "email"], [1, "edit", 3, "click"], [1, "logout", 3, "click"], [1, "hey"], ["class", "form", "id", "user-name", 4, "ngIf"], ["id", "user-email", 1, "forma"], ["id", "emailt", "type", "text", "autocomplete", "off", "name", "namea", "readonly", "", 3, "value"], ["for", "namea", 1, "label-namea"], [1, "content-nameaz"], ["id", "clg-name", 1, "formb"], ["id", "clg-namet", "type", "text", "autocomplete", "off", "name", "nameb", "required", ""], ["for", "nameb", 1, "label-nameb"], ["id", "i-clgname", 1, "content-nameb"], ["id", "clg-city", 1, "formc"], ["id", "clg-cityt", "type", "text", "autocomplete", "off", "name", "namec", "required", ""], ["for", "namec", 1, "label-namec"], [1, "content-namec"], ["id", "choose-file", 1, "card-body"], ["type", "file", "id", "chosen", "accept", ".png,.jpg", "namr", "fileu"], [3, "click"], [1, "vl"], [1, "carouselkk"], [1, "col-sm-6", "col-sm-offset-3"], [1, "carouselk"], [1, "text-center", 3, "pauseOnFocus"], [1, "imgggg", 3, "ngStyle"], [1, "merge"], [1, "Caption"], ["href", "http://www.google.com"], [1, "wrapperi"], [1, "card"], [1, "enclosed"], [1, "wrapper2"], ["id", "user-name", 1, "form"], ["id", "namet", "type", "text", "autocomplete", "off", "name", "name", "readonly", "", 3, "value"], ["for", "name", 1, "label-name"], ["id", "i-namezz", 1, "content-namezz"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_ng_template_0_Template, 3, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["SlideComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".hey[_ngcontent-%COMP%]\r\n{\r\n    width:50%;\r\n    height: 300px;\r\n    margin-left: 100px;\r\n    margin-top: 0px;\r\n    background-color: none;\r\n    \r\n}\r\n.form[_ngcontent-%COMP%]\r\n{\r\n    width: 80%;\r\n    height: 25%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    \r\n    \r\n    \r\n}\r\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-top: 20px;\r\n    border: none;\r\n    outline: none;\r\n    color: deeppink;\r\n    background: transparent;\r\n    \r\n}\r\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom:0px;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    border-bottom: 1px solid black;\r\n    color:deeppink;\r\n    \r\n}\r\n\r\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\r\n    content: \"\";\r\n    height:50%;\r\n    width:100%;\r\n    position: absolute;\r\n     border-bottom: 3px solid blue;\r\n     left: 0px;\r\n     bottom: -1px;\r\n     transform: translateX(-100%);\r\n     transition: transfom 0.3s ease;\r\n}\r\n.content-name[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom:5px;\r\n    transition: all 0.3s ease;\r\n\r\n}\r\n.content-namezz[_ngcontent-%COMP%]\r\n{\r\ncolor: goldenrod;\r\nfont-size: 14px;\r\npadding-top: 5px;\r\n}\r\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-name[_ngcontent-%COMP%]   .content-name[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-name[_ngcontent-%COMP%]   .content-name[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-name[_ngcontent-%COMP%]   .content-name[_ngcontent-%COMP%]\r\n{\r\n    transform: translateY(-150%);\r\n    font-size: 14px;\r\n    color: goldenrod;\r\n    \r\n    \r\n\r\n}\r\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-name[_ngcontent-%COMP%]::after, .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-name[_ngcontent-%COMP%]::after{\r\n    transform: translateX(0%);\r\n}\r\n.forma[_ngcontent-%COMP%]\r\n{\r\n    width: 80%;\r\n    height: 25%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n   \r\n}\r\n.forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-top: 20px;\r\n    border: none;\r\n    outline: none;\r\n    background: transparent;\r\n    color: deeppink;\r\n}\r\n.forma[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom:0px;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    border-bottom: 1px solid black;\r\n    color: deeppink;\r\n    \r\n}\r\n\r\n.forma[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\r\n    content: \"\";\r\n    height:100%;\r\n    width:100%;\r\n    position: absolute;\r\n     border-bottom: 3px solid blue;\r\n     left: 0px;\r\n     bottom: -1px;\r\n     transform: translateX(-100%);\r\n     transition: transfom 0.3s ease;\r\n    \r\n}\r\n.content-namea[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom:5px;\r\n    transition: all 0.3s ease;\r\n    border: none;\r\n    \r\n}\r\n.content-nameaz[_ngcontent-%COMP%]\r\n{\r\n    color: goldenrod;\r\n    font-size: 14px;\r\n}\r\n.forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namea[_ngcontent-%COMP%]   .content-namea[_ngcontent-%COMP%], .forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namea[_ngcontent-%COMP%]   .content-namea[_ngcontent-%COMP%], .forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namea[_ngcontent-%COMP%]   .content-namea[_ngcontent-%COMP%]\r\n{\r\n    transform: translateY(-150%);\r\n    font-size: 14px;\r\n    color: goldenrod;\r\n\r\n}\r\n.forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namea[_ngcontent-%COMP%]::after, .forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namea[_ngcontent-%COMP%]::after{\r\n    transform: translateX(0%);\r\n}\r\n.formb[_ngcontent-%COMP%]\r\n{\r\n    width: 80%;\r\n    height: 25%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n}\r\n.formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-top: 20px;\r\n    border: none;\r\n    outline: none;\r\n    background: transparent;\r\n    color: deeppink;\r\n}\r\n.formb[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom:0px;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    border-bottom: 1px solid black;\r\n    color: deeppink;\r\n}\r\n\r\n.formb[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\r\n    content: \"\";\r\n    height:100%;\r\n    width:100%;\r\n    position: absolute;\r\n     border-bottom: 3px solid blue;\r\n     left: 0px;\r\n     bottom: -1px;\r\n     transform: translateX(-100%);\r\n     transition: transfom 0.3s ease;\r\n}\r\n.content-nameb[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom:5px;\r\n    transition: all 0.3s ease;\r\n\r\n}\r\n.formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-nameb[_ngcontent-%COMP%]   .content-nameb[_ngcontent-%COMP%], .formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-nameb[_ngcontent-%COMP%]   .content-nameb[_ngcontent-%COMP%], .formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-nameb[_ngcontent-%COMP%]   .content-nameb[_ngcontent-%COMP%]\r\n{\r\n    transform: translateY(-150%);\r\n    font-size: 14px;\r\n    color: goldenrod;\r\n\r\n}\r\n.formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-nameb[_ngcontent-%COMP%]::after, .formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-nameb[_ngcontent-%COMP%]::after{\r\n    transform: translateX(0%);\r\n}\r\n.formc[_ngcontent-%COMP%]\r\n{\r\n    width: 80%;\r\n    height: 25%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n}\r\n.formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-top: 20px;\r\n    border: none;\r\n    outline: none;\r\n    background: transparent;\r\n    color: deeppink;\r\n}\r\n.formc[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom:0px;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    border-bottom: 1px solid black;\r\n    color: deeppink;\r\n}\r\n\r\n.formc[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\r\n    content: \"\";\r\n    height:100%;\r\n    width:100%;\r\n    position: absolute;\r\n     border-bottom: 3px solid blue;\r\n     left: 0px;\r\n     bottom: -1px;\r\n     transform: translateX(-100%);\r\n     transition: transfom 0.3s ease;\r\n}\r\n.content-namec[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom:5px;\r\n    transition: all 0.3s ease;\r\n\r\n}\r\n.formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namec[_ngcontent-%COMP%]   .content-namec[_ngcontent-%COMP%], .formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namec[_ngcontent-%COMP%]   .content-namec[_ngcontent-%COMP%], .formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namec[_ngcontent-%COMP%]   .content-namec[_ngcontent-%COMP%]\r\n{\r\n    transform: translateY(-150%);\r\n    font-size: 14px;\r\n    color: goldenrod;\r\n\r\n}\r\n.formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namec[_ngcontent-%COMP%]::after, .formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namec[_ngcontent-%COMP%]::after{\r\n    transform: translateX(0%);\r\n}\r\n.edit-info[_ngcontent-%COMP%]\r\n{\r\n    visibility: hidden;\r\n}\r\n.email[_ngcontent-%COMP%]\r\n{\r\n    color: whitesmoke;\r\n}\r\n.logout[_ngcontent-%COMP%]:hover {\r\n    color: #9050AA;\r\n        background-color:#FF6347;\r\n        border-radius: 15px;\r\n  }\r\n.bset[_ngcontent-%COMP%]\r\n  {\r\nopacity: 0.8;\r\nheight: 200vh;\r\nbackground-size: 100% 100%;\r\n  }\r\n.card-body[_ngcontent-%COMP%]\r\n{\r\n    visibility: hidden;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    margin-left:5px;\r\n  }\r\n.bar1[_ngcontent-%COMP%], .bar2[_ngcontent-%COMP%], .bar3[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color:whitesmoke;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n.change[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\r\n    transform: rotate(-45deg) translate(-9px, 6px);\r\n  }\r\n.change[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {opacity: 0;}\r\n.change[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\r\n    transform: rotate(45deg) translate(-8px, -8px);\r\n  }\r\n.dashi[_ngcontent-%COMP%]\r\n  {\r\n      float: left;\r\n      \r\n      \r\n      width:520px;\r\n  }\r\n.vl[_ngcontent-%COMP%] {\r\n      \r\n    border-left: 1px solid gray;\r\n    height: 1000px;\r\n    float:left;\r\n  }\r\n\r\n.col-sm-.col-sm-offset-3[_ngcontent-%COMP%]\r\n{\r\nfloat: left;\r\n}\r\n.setting[_ngcontent-%COMP%]\r\n{\r\n    height: 1000px;\r\n}\r\n.imgggg[_ngcontent-%COMP%]\r\n{\r\n  opacity:0.8;\r\n  width: 800px;\r\n}\r\n.merge[_ngcontent-%COMP%]\r\n{\r\n  \r\n    border-bottom: cyan;\r\n    height: 1000px;\r\n    width:800px;\r\n    \r\n}\r\n.wrapperi[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    perspective: 40em;\r\n   \r\n    display: grid;\r\n    transform-style: preserve-3d;\r\n    float: left;\r\n    padding-left: 150px;\r\n    padding-top: 220px;\r\n    padding-right: 100px;\r\n   \r\n    \r\n   \r\n  }\r\n.card[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 1;\r\n    height: 150px;\r\n    width: 200px;\r\n    transform: translateX(10px) rotateY(25deg) rotateX(10deg);\r\n    background: rgba(249, 198, 26, 0.88);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    \r\n    color: #000;\r\n    text-transform: uppercase;\r\n    font-size: 30px;\r\n    font-weight: 800;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    box-shadow: 0 10px 30px -3px rgba(0,0,0,.1);\r\n  }\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: 60px;\r\n    font-weight: 800;\r\n  }\r\n.card[_ngcontent-%COMP%]   .enclosed[_ngcontent-%COMP%] {\r\n    background: #000;\r\n    line-height: 1;\r\n    color: rgba(249, 198, 26, 1);\r\n    padding: 0 5px;\r\n    display: inline-block;\r\n    transform: translate(-1px, 1px) scale(0.75);\r\n    transform-origin: right center;\r\n  }\r\n.wrapperi[_ngcontent-%COMP%]:before {\r\n    --bw: 9px;\r\n    grid-area: 1 / 1;\r\n    content: '';\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    height: 100%;\r\n    width: 100%;\r\n    margin-top: calc(-1 * var(--bw));\r\n    margin-left: calc(-1 * var(--bw));\r\n    background: transparent;\r\n    transform: translateX(-60px) rotateY(-30deg) rotateX(15deg) scale(1.03);\r\n    pointer-events: none;\r\n    border: var(--bw) solid #000;\r\n    box-sizing: content-box;\r\n  }\r\n.wrapperi[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%], .wrapperi[_ngcontent-%COMP%]:hover:before {\r\n    transform: none;\r\n  }\r\n.wrapperi[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .wrapperi[_ngcontent-%COMP%]:before {\r\n    will-change: transform;\r\n    transition: .3s transform cubic-bezier(.25,.46,.45,1);\r\n  }\r\n.wrapper2[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    perspective: 40em;\r\n   float:left;\r\n    display: grid;\r\n    transform-style: preserve-3d;\r\n    \r\n    padding-left: 50px;\r\n    padding-top: 200px;\r\n    padding-right: 100px;\r\n    \r\n    \r\n  }\r\n.card2[_ngcontent-%COMP%] {\r\n    grid-area: 1 / 1;\r\n    height: 150px;\r\n    width:200px;\r\n    transform: translateX(10px) rotateY(25deg) rotateX(10deg);\r\n    background: rgba(249, 198, 26, 0.88);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    \r\n    \r\n    color: #000;\r\n    text-transform: uppercase;\r\n    font-size: 30px;\r\n    font-weight: 800;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    box-shadow: 0 10px 30px -3px rgba(0,0,0,.1);\r\n  }\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    font-weight: 800;\r\n  }\r\n.card2[_ngcontent-%COMP%]   .enclosed2[_ngcontent-%COMP%] {\r\n    background: #000;\r\n    line-height: 1;\r\n    color: rgba(249, 198, 26, 1);\r\n    padding: 0 5px;\r\n    display: inline-block;\r\n    transform: translate(-1px, 1px) scale(0.75);\r\n    transform-origin: right center;\r\n  }\r\n.wrapper2[_ngcontent-%COMP%]:before {\r\n    --bw: 9px;\r\n    grid-area: 1 / 1;\r\n    content: '';\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    height: 100%;\r\n    width: 100%;\r\n    margin-top: calc(-1 * var(--bw));\r\n    margin-left: calc(-1 * var(--bw));\r\n    background: transparent;\r\n    transform: translateX(-60px) rotateY(-30deg) rotateX(15deg) scale(1.03);\r\n    pointer-events: none;\r\n    border: var(--bw) solid #000;\r\n    box-sizing: content-box;\r\n  }\r\n.wrapper2[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%], .wrapper2[_ngcontent-%COMP%]:hover:before {\r\n    transform: none;\r\n  }\r\n.wrapper2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .wrapper2[_ngcontent-%COMP%]:before {\r\n    will-change: transform;\r\n    transition: .3s transform cubic-bezier(.25,.46,.45,1);\r\n  }\r\n.caption[_ngcontent-%COMP%]\r\n  {\r\n    background-color: blue;\r\n    font-size: 100px;\r\n    height:100px;\r\n  }\r\n.trying[_ngcontent-%COMP%]\r\n{\r\n    float: left;\r\n    width:1200px;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-top: 0px;\r\n    background-color: #3b5998;\r\n    margin-left: 0px;\r\n   \r\n}\r\n.carouselk[_ngcontent-%COMP%]{\r\n    \r\n    width:800px;\r\n    \r\n    \r\n   float: left;\r\n   position: relative;\r\n}\r\n.carouselkk[_ngcontent-%COMP%]\r\n{\r\n    \r\n    \r\n    width:800px;\r\n    align-items: center;\r\n    float: left;\r\n}\r\n.col-sm-[_ngcontent-%COMP%]   col-sm-offset-3[_ngcontent-%COMP%]\r\n{\r\nfloat: left;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7O0FBRTFCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7OztBQUl0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLGNBQWM7O0FBRWxCO0FBQ0E7Ozs7Ozs7OztFQVNFO0FBQ0Y7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7S0FDakIsNkJBQTZCO0tBQzdCLFNBQVM7S0FDVCxZQUFZO0tBQ1osNEJBQTRCO0tBQzVCLDhCQUE4QjtBQUNuQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5QkFBeUI7O0FBRTdCO0FBQUM7O0FBRUQsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEI7QUFFQTs7OztJQUlJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZ0JBQWdCOzs7O0FBSXBCO0FBQ0E7O0lBRUkseUJBQXlCO0FBQzdCO0FBQ0E7O0lBRUksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNs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ImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXlcclxue1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICBcclxufVxyXG4uZm9ybVxyXG57XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5mb3JtIGlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogZGVlcHBpbms7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIFxyXG59XHJcbi5mb3JtIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTowcHg7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBjb2xvcjpkZWVwcGluaztcclxuICAgIFxyXG59XHJcbi8qYm9keXtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblxyXG5cclxufSovXHJcbi5mb3JtIGxhYmVsOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6NTAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmx1ZTtcclxuICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgYm90dG9tOiAtMXB4O1xyXG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgdHJhbnNpdGlvbjogdHJhbnNmb20gMC4zcyBlYXNlO1xyXG59XHJcbi5jb250ZW50LW5hbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206NXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbn0uY29udGVudC1uYW1lenpcclxue1xyXG5jb2xvcjogZ29sZGVucm9kO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbnBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5mb3JtIGlucHV0OmZvY3VzICsgLmxhYmVsLW5hbWUgLmNvbnRlbnQtbmFtZSxcclxuLmZvcm0gaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZSAuY29udGVudC1uYW1lLFxyXG4uZm9ybSBpbnB1dDp2YWxpZCArIC5sYWJlbC1uYW1lIC5jb250ZW50LW5hbWVcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XHJcbiAgICBcclxuICAgIFxyXG5cclxufVxyXG4uZm9ybSBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lOjphZnRlcixcclxuLmZvcm0gaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZTo6YWZ0ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG59XHJcbi5mb3JtYVxyXG57XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICBcclxufVxyXG4uZm9ybWEgaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGRlZXBwaW5rO1xyXG59XHJcbi5mb3JtYSBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206MHB4O1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgY29sb3I6IGRlZXBwaW5rO1xyXG4gICAgXHJcbn1cclxuLypib2R5e1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcblxyXG59Ki9cclxuLmZvcm1hIGxhYmVsOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XHJcbiAgICAgbGVmdDogMHB4O1xyXG4gICAgIGJvdHRvbTogLTFweDtcclxuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgIHRyYW5zaXRpb246IHRyYW5zZm9tIDAuM3MgZWFzZTtcclxuICAgIFxyXG59XHJcbi5jb250ZW50LW5hbWVhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBcclxufVxyXG4uY29udGVudC1uYW1lYXpcclxue1xyXG4gICAgY29sb3I6IGdvbGRlbnJvZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZm9ybWEgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWEgLmNvbnRlbnQtbmFtZWEsXHJcbi5mb3JtYSBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYSAuY29udGVudC1uYW1lYSxcclxuLmZvcm1hIGlucHV0OnZhbGlkICsgLmxhYmVsLW5hbWVhIC5jb250ZW50LW5hbWVhXHJcbntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogZ29sZGVucm9kO1xyXG5cclxufVxyXG4uZm9ybWEgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWE6OmFmdGVyLFxyXG4uZm9ybWEgaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZWE6OmFmdGVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG5cclxuLmZvcm1iXHJcbntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmZvcm1iIGlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBkZWVwcGluaztcclxufVxyXG4uZm9ybWIgbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjBweDtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIGNvbG9yOiBkZWVwcGluaztcclxufVxyXG4vKmJvZHl7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cclxuXHJcbn0qL1xyXG4uZm9ybWIgbGFiZWw6OmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmx1ZTtcclxuICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgYm90dG9tOiAtMXB4O1xyXG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgdHJhbnNpdGlvbjogdHJhbnNmb20gMC4zcyBlYXNlO1xyXG59XHJcbi5jb250ZW50LW5hbWVie1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG59XHJcbi5mb3JtYiBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYiAuY29udGVudC1uYW1lYixcclxuLmZvcm1iIGlucHV0OmZvY3VzICsgLmxhYmVsLW5hbWViIC5jb250ZW50LW5hbWViLFxyXG4uZm9ybWIgaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZWIgLmNvbnRlbnQtbmFtZWJcclxue1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XHJcblxyXG59XHJcbi5mb3JtYiBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYjo6YWZ0ZXIsXHJcbi5mb3JtYiBpbnB1dDp2YWxpZCArIC5sYWJlbC1uYW1lYjo6YWZ0ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG59XHJcbi5mb3JtY1xyXG57XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5mb3JtYyBpbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogZGVlcHBpbms7XHJcbn1cclxuLmZvcm1jIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTowcHg7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBjb2xvcjogZGVlcHBpbms7XHJcbn1cclxuLypib2R5e1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcblxyXG59Ki9cclxuLmZvcm1jIGxhYmVsOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XHJcbiAgICAgbGVmdDogMHB4O1xyXG4gICAgIGJvdHRvbTogLTFweDtcclxuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgIHRyYW5zaXRpb246IHRyYW5zZm9tIDAuM3MgZWFzZTtcclxufVxyXG4uY29udGVudC1uYW1lY3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTo1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxufVxyXG4uZm9ybWMgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWMgLmNvbnRlbnQtbmFtZWMsXHJcbi5mb3JtYyBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYyAuY29udGVudC1uYW1lYyxcclxuLmZvcm1jIGlucHV0OnZhbGlkICsgLmxhYmVsLW5hbWVjIC5jb250ZW50LW5hbWVjXHJcbntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogZ29sZGVucm9kO1xyXG5cclxufVxyXG4uZm9ybWMgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWM6OmFmdGVyLFxyXG4uZm9ybWMgaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZWM6OmFmdGVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG4uZWRpdC1pbmZvXHJcbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uZW1haWxcclxue1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmxvZ291dDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzkwNTBBQTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRjYzNDc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgLmJzZXRcclxuICB7XHJcbm9wYWNpdHk6IDAuODtcclxuaGVpZ2h0OiAyMDB2aDtcclxuYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG4uY2FyZC1ib2R5XHJcbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xyXG4gICAgbWFyZ2luOiA2cHggMDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFuZ2UgLmJhcjEge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcclxuICB9XHJcbiAgXHJcbiAgLmNoYW5nZSAuYmFyMiB7b3BhY2l0eTogMDt9XHJcbiAgXHJcbiAgLmNoYW5nZSAuYmFyMyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xyXG4gIH1cclxuICAuZGFzaGlcclxuICB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAvKnBhZGRpbmctcmlnaHQ6IDUwcHg7Ki9cclxuICAgICAgXHJcbiAgICAgIHdpZHRoOjUyMHB4O1xyXG4gIH1cclxuICAudmwge1xyXG4gICAgICBcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICAgIGhlaWdodDogMTAwMHB4O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICB9XHJcbiAgLyouY2FycnltaW5hdGlcclxuICB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH0qL1xyXG4gIFxyXG4uY29sLXNtLS5jb2wtc20tb2Zmc2V0LTNcclxue1xyXG5mbG9hdDogbGVmdDtcclxufVxyXG5cclxuXHJcbiAgXHJcbiAgLnNldHRpbmdcclxue1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbn1cclxuLmltZ2dnZ1xyXG57XHJcbiAgb3BhY2l0eTowLjg7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG59XHJcbi5tZXJnZVxyXG57XHJcbiAgXHJcbiAgICBib3JkZXItYm90dG9tOiBjeWFuO1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICB3aWR0aDo4MDBweDtcclxuICAgIFxyXG59XHJcbi53cmFwcGVyaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwZXJzcGVjdGl2ZTogNDBlbTtcclxuICAgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICBcclxuICAgIFxyXG4gICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MzQ3OyovXHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDE7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpIHJvdGF0ZVkoMjVkZWcpIHJvdGF0ZVgoMTBkZWcpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDksIDE5OCwgMjYsIDAuODgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKnBhZGRpbmc6IDMwcHg7Ki9cclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtM3B4IHJnYmEoMCwwLDAsLjEpO1xyXG4gIH1cclxuICBcclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxuICBcclxuICAuY2FyZCAuZW5jbG9zZWQge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgY29sb3I6IHJnYmEoMjQ5LCAxOTgsIDI2LCAxKTtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMXB4KSBzY2FsZSgwLjc1KTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLndyYXBwZXJpOmJlZm9yZSB7XHJcbiAgICAtLWJ3OiA5cHg7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS1idykpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1idykpO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYwcHgpIHJvdGF0ZVkoLTMwZGVnKSByb3RhdGVYKDE1ZGVnKSBzY2FsZSgxLjAzKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1idykgc29saWQgIzAwMDtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIH1cclxuICBcclxuICBcclxuICAud3JhcHBlcmk6aG92ZXIgPiBkaXYsXHJcbiAgLndyYXBwZXJpOmhvdmVyOmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC53cmFwcGVyaSA+IGRpdixcclxuICAud3JhcHBlcmk6YmVmb3JlIHtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwxKTtcclxuICB9XHJcbiAgLndyYXBwZXIyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBlcnNwZWN0aXZlOiA0MGVtO1xyXG4gICBmbG9hdDpsZWZ0O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgXHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNGRjYzNDc7Ki9cclxuICB9XHJcbiAgXHJcbiAgLmNhcmQyIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDE7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCkgcm90YXRlWSgyNWRlZykgcm90YXRlWCgxMGRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTk4LCAyNiwgMC44OCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8qcGFkZGluZzogMzBweDsqL1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTNweCByZ2JhKDAsMCwwLC4xKTtcclxuICB9XHJcbiAgXHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQyIC5lbmNsb3NlZDIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgY29sb3I6IHJnYmEoMjQ5LCAxOTgsIDI2LCAxKTtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMXB4KSBzY2FsZSgwLjc1KTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLndyYXBwZXIyOmJlZm9yZSB7XHJcbiAgICAtLWJ3OiA5cHg7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS1idykpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1idykpO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYwcHgpIHJvdGF0ZVkoLTMwZGVnKSByb3RhdGVYKDE1ZGVnKSBzY2FsZSgxLjAzKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1idykgc29saWQgIzAwMDtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIH1cclxuICBcclxuICBcclxuICAud3JhcHBlcjI6aG92ZXIgPiBkaXYsXHJcbiAgLndyYXBwZXIyOmhvdmVyOmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC53cmFwcGVyMiA+IGRpdixcclxuICAud3JhcHBlcjI6YmVmb3JlIHtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwxKTtcclxuICB9XHJcbiAgLmNhcHRpb25cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGhlaWdodDoxMDBweDtcclxuICB9XHJcbi50cnlpbmdcclxue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDoxMjAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgXHJcbn1cclxuLmNhcm91c2Vsa3tcclxuICAgIFxyXG4gICAgd2lkdGg6ODAwcHg7XHJcbiAgICBcclxuICAgIFxyXG4gICBmbG9hdDogbGVmdDtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJvdXNlbGtrXHJcbntcclxuICAgIFxyXG4gICAgXHJcbiAgICB3aWR0aDo4MDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uY29sLXNtLSBjb2wtc20tb2Zmc2V0LTNcclxue1xyXG5mbG9hdDogbGVmdDtcclxufVxyXG5cclxuXHJcblxyXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/exam/exam.component.ts":
  /*!****************************************!*\
    !*** ./src/app/exam/exam.component.ts ***!
    \****************************************/

  /*! exports provided: ExamComponent */

  /***/
  function srcAppExamExamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamComponent", function () {
      return ExamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExamComponent = /*#__PURE__*/function () {
      function ExamComponent() {
        _classCallCheck(this, ExamComponent);
      }

      _createClass(ExamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExamComponent;
    }();

    ExamComponent.ɵfac = function ExamComponent_Factory(t) {
      return new (t || ExamComponent)();
    };

    ExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExamComponent,
      selectors: [["app-exam"]],
      decls: 2,
      vars: 0,
      template: function ExamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Coming Soon!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW0vZXhhbS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-exam',
          templateUrl: './exam.component.html',
          styleUrls: ['./exam.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js"); //import { Component, OnInit } from '@angular/core';


    function LoginComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function LoginComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "To Continue ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_10_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.auth.faceSignin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Sign in through Facebook ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_10_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.auth.googleSignin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign in With Google");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_ng_template_12_div_1_div_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r11 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r11.displayName);
      }
    }

    var _c0 = function _c0() {
      return {
        backgroundImage: "url(./assets/tech.jpg)"
      };
    };

    var _c1 = function _c1() {
      return {
        backgroundImage: "url(./assets/webdev.png)"
      };
    };

    var _c2 = function _c2() {
      return {
        backgroundImage: "url(./assets/marketing.jpg)"
      };
    };

    function LoginComponent_ng_template_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_12_div_1_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.myFunction();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " HOME ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ABOUT ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " SERVICES ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " CONTACT ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " MORE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_12_div_1_Template_button_click_41_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.onClickMe();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_12_div_1_Template_button_click_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.auth.signOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, LoginComponent_ng_template_12_div_1_div_52_Template, 6, 1, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "College Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "College City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Change Profile Picture ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_12_div_1_Template_button_click_78_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          ctx_r16.ch();
          return ctx_r16.alertm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "carousel", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Technical");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Reading");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Material ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "APP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "ly ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Web-Development");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Reading");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Material ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "APP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "ly ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h2", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Marketing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Reading");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Material ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "APP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "ly ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r9 = ctx.ngIf;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", user_r9.displayName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r9.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 10, ctx_r8.auth.user$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r9.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.kMessage, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pauseOnFocus", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
      }
    }

    var _c3 = function _c3() {
      return {
        backgroundImage: "url(./assets/dashboard-bg.jpg)"
      };
    };

    function LoginComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_template_12_div_1_Template, 165, 15, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r4.auth.user$));
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(firestore, auth, afStorage, afs, router) {
        _classCallCheck(this, LoginComponent);

        this.firestore = firestore;
        this.auth = auth;
        this.afStorage = afStorage;
        this.afs = afs;
        this.router = router;
        this.title = 'firebase1';
        this.i = 1;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
        this.clickMessage = '';
        this.kMessage = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "check",
        value: function check() {
          var user = firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
          var photu = user.photoURL;
          console.log(photu);
        }
      }, {
        key: "onClickMe",
        value: function onClickMe() {
          //this.clickMessage = 'You are my hero!';
          document.getElementById("user-name").style.visibility = "visible";
          document.getElementById("user-email").style.visibility = "visible";
          document.getElementById("clg-name").style.visibility = "visible";
          document.getElementById("clg-city").style.visibility = "visible";
          document.getElementById("choose-file1").style.visibility = "visible"; //(change)="auth.upload($event)"
        }
      }, {
        key: "ch",
        value: function ch() {
          /*this.fb.getDataArr('users','value',{limitToFirst:2}).then((v)=>{
            console.log(v)
            
          });*/
          //console.log(value);
          //console.log(c);
          //let c:string = value;
          //console.log(value.type)
          //var value = document.getElementById("txtt")
          var user = firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
          var nameu = document.getElementById("namet").value;
          var emailu = document.getElementById("emailt").value;
          var photou = document.getElementById("choose-file1").value;
          var clgnameu = document.getElementById("clg-namet").value;
          var clgcityu = document.getElementById("clg-cityt").value;
          var save = user.uid;
          console.log("users/" + save);

          if (clgnameu) {
            var docref = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().doc("users/" + save);
            docref.update({
              CollegeName: clgnameu
            }).then(function () {
              console.log("success");
            })["catch"](function (error) {
              console.log("error", error);
            });
          }

          if (clgcityu) {
            var docref = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().doc("users/" + save);
            docref.update({
              CollegeCity: clgcityu
            }).then(function () {
              console.log("success");
            })["catch"](function (error) {
              console.log("error", error);
            });
          } //console.log(docref)


          console.log(clgnameu);

          if (nameu && photou) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              user.updateProfile({
                displayName: nameu,
                photoURL: photou //photoURL: unit1

              });

              if (user) {
                console.log(user);
              } else {}
            });
          } else if (nameu && !photou) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              user.updateProfile({
                displayName: nameu,
                photoURL: user.photoURL //photoURL: unit1

              });

              if (user) {
                console.log(user);
              } else {}
            });
          } else if (!nameu && photou) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              user.updateProfile({
                displayName: user.displayName,
                photoURL: photou //photoURL: unit1

              });

              if (user) {
                console.log(user);
              } else {}
            });
          } else {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              user.updateProfile({
                displayName: user.displayName,
                photoURL: user.photoURL //photoURL: unit1

              });

              if (user) {
                console.log(user);
              } else {}
            });
          } //console.log()

          /*if(emailu)
          {
          firebase.auth().onAuthStateChanged(function (user) {
                    user.updateEmail(emailu).then(function() {
              // Update successful.
            }).catch(function(error) {
              // An error happened.
              console.log(error)
            });
            });
          }
          var save  = user.uid;
          var docref = firebase.firestore().doc("users/"+ save);
          if(clgnameu)
          {
          docref.set(
            {
          CollegeName: clgnameu
            }
          )
          
          console.log(clgnameu)
          }*/

        }
      }, {
        key: "myFunction",
        value: function myFunction() {
          var check = document.getElementById("navi").style.visibility;
          document.getElementById("togbutton").classList.toggle("change");
          if (this.i % 2) document.getElementById("navi").style.visibility = "visible";
          if (this.i % 2 == 0) document.getElementById("navi").style.visibility = "hidden";
          this.i++;
          console.log(this.i % 2);
        }
      }, {
        key: "hoja",
        value: function hoja() {
          firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
            // User is signed in.
            if (user) {
              console.log('HELLO BOY');
              this.router.navigate('./../dashboard');
            } else {
              console.log('NO HELLO BOY');
            } //this.router.navigateByUrl('../dashboard');
            // No user is signed in.

          }); //console.log("hello bou");
        }
      }, {
        key: "navbar",
        value: function navbar() {
          document.getElementById("navi").style.visibility = "visible";
        }
      }, {
        key: "alertm",
        value: function alertm() {
          alert('Information Updated Successfully');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 14,
      vars: 5,
      consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "https://accounts.scdn.co/css/index.48778854b2fbc42ce2ee.css", "media", "screen", "rel", "stylesheet"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["guest", ""], ["authenticated", ""], [1, "Login"], [1, "w3-center", "w3-black"], ["src", "assets/1.PNG", 2, "max-height", "150px", "align", "middle"], [1, "w3-center"], [1, "w3-container", "w3-center"], [1, "btn", "btn-block", "btn-facebook", "facebook", 2, "font-size", "14px", "text-align", "center", "background-color", "#3b5998", "color", "#fff", 3, "click"], [1, "btn", "btn-block", "btn-google", "google", 2, "font-size", "14px", "text-align", "center", "background-color", "#000", "color", "#fff", 3, "click"], [1, "col-xs-12", "row"], [1, "divider", 2, "margin", "7px 239px", "padding", "14px 14px 18px"], [1, "text-center", "mt-0"], [1, "h4", "ng-binding"], ["id", "contact", 1, "sm-padding", 2, "background-color", "black"], [1, "container"], [1, "row"], [1, "section-header", "text-center"], [1, "title", 2, "color", "white", "font-size", "235%", "margin", "center", "display", "block"], [1, "col-md-12"], [1, "footer-logo"], ["href", "#"], ["src", "/assets/era.png", "alt", "logo", 2, "margin", "auto", "display", "block"], [1, "footer-follow", 2, "font-size", "48px", "display", "block", "margin", "auto"], ["href", "https://www.facebook.com/eraiitkanpur/", "target", "_blank", "wrc_done", "true"], [1, "fa", "fa-facebook"], ["href", "https://www.github.com/ERA-IITK", "target", "_blank"], [1, "fa", "fa-github"], ["href", "mailto:eraiitk@gmail.com"], [1, "fa", "fa-envelope"], ["href", "https://www.linkedin.com/company/era-iitk/", "target", "_blank"], ["target", "_blank", 1, "fa", "fa-linkedin"], ["href", "https://www.youtube.com/channel/UCaaEga5jSCEN6ph6w9E9TVQ", "wrc_done", "true"], ["target", "_blank", 1, "fa", "fa-youtube"], [1, "bset", 3, "ngStyle"], [4, "ngIf"], ["id", "togbutton", 1, "container", 3, "click"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["id", "navi"], [1, "dashi"], [1, "h1class", 2, "color", "#fff"], [1, "h3class", 2, "color", "whitesmoke"], [1, "user-p", 3, "src"], [1, "fa", "fa-envelope", 2, "font-size", "18px", "color", "whitesmoke"], [1, "email"], [1, "edit", 3, "click"], [1, "logout", 3, "click"], [1, "hey"], ["class", "form", "id", "user-name", 4, "ngIf"], ["id", "user-email", 1, "forma"], ["id", "emailt", "type", "text", "autocomplete", "off", "name", "namea", "readonly", "", 3, "value"], ["for", "namea", 1, "label-namea"], [1, "content-nameaz"], ["id", "clg-name", 1, "formb"], ["id", "clg-namet", "type", "text", "autocomplete", "off", "name", "nameb", "required", ""], ["for", "nameb", 1, "label-nameb"], ["id", "i-clgname", 1, "content-nameb"], ["id", "clg-city", 1, "formc"], ["id", "clg-cityt", "type", "text", "autocomplete", "off", "name", "namec", "required", ""], ["for", "namec", 1, "label-namec"], [1, "content-namec"], ["id", "choose-file1", 1, "card-body"], ["id", "choose-file", 1, "file", "btn", "btn-lg", "btn-primary"], ["type", "file", "id", "chosenz", "accept", ".png,.jpg", "namr", "fileu"], ["id", "butu", 1, "btn", "btn-dark", 3, "click"], [1, "vl"], [1, "carouselkk"], [1, "col-sm-6", "col-sm-offset-3"], [1, "carouselk"], [1, "text-center", 3, "pauseOnFocus"], [1, "imgggg", 3, "ngStyle"], [1, "merge"], [1, "Caption"], [1, "tech"], ["href", "http://www.google.com"], [1, "wrapperi"], [1, "card"], [1, "enclosed"], [1, "wrapper2"], ["id", "user-name", 1, "form"], ["id", "namet", "type", "text", "autocomplete", "off", "name", "name", "readonly", "", 3, "value"], ["for", "name", 1, "label-name"], ["id", "i-namezz", 1, "content-namezz"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 1, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_ng_template_10_Template, 44, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_ng_template_12_Template, 3, 5, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, ctx.auth.user$))("ngIfThen", _r3)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["SlideComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".btn[_ngcontent-%COMP%] {\n    padding: 16px 14px 18px;\n}\n.btn-facebook[_ngcontent-%COMP%]{\n    color: #fff;\n    background-color: #3b5998\n}\n.btn-block[_ngcontent-%COMP%]{\n    display: block;\n    width: 30%;\n    margin:auto;\n}\n.btn[_ngcontent-%COMP%]{\n    font-size: 14px;\n    line-height: 1;\n    border-radius: 500px;\n    \n    \n    \n    border-width: 0;\n    letter-spacing: 2px;\n    min-width: 160px;\n    text-transform: uppercase;\n    white-space: normal;\n}\n.btn-facebook[_ngcontent-%COMP%] {\n    padding-top: 14px;\n}\n.btn-facebook[_ngcontent-%COMP%]:hover{\n    background-color: cornsilk;\n}\nbody[_ngcontent-%COMP%] {\n    font-family: circular-spotify-ui,Helvetica Neue,Helvetica,Arial,sans-serif;\n}\n.btn[_ngcontent-%COMP%]  {\n    \n    margin-bottom: 0;\n    font-weight: 700;\n    text-align: center;\n    vertical-align: middle;\n   \n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n}\nimg[_ngcontent-%COMP%]{\n    vertical-align: middle;\n    border:0;\n    \n}\n.bg-dark[_ngcontent-%COMP%]{\n    background-color: #000;\n}\n.sm-padding[_ngcontent-%COMP%]{\n    padding-top: 60px ;\n    padding-bottom : 60px;\n}\n.container[_ngcontent-%COMP%]{\n    padding: 15px 0px;\n    margin-right:auto;\n    margin-left:auto;\n}\n.row[_ngcontent-%COMP%] {\n    margin-left: -15px;\n    margin-right: -15px;\n}\n.section-header[_ngcontent-%COMP%]{\n    position: relative;\n    margin-bottom: 60px;\n    \n}\n.text-center[_ngcontent-%COMP%]{\n    text-align: center;\n}\ndiv[_ngcontent-%COMP%] {\n    display: block;\n}\n.row[_ngcontent-%COMP%]:before {\n    \n    content: \" \";\n}\n[_ngcontent-%COMP%]:before {\n    box-sizing: border-box;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n    background-color: #6195FF;\n    color: #FFF;\n}\n[_ngcontent-%COMP%]::selection {\n    background-color: #6195FF;\n    color: #FFF;\n}\n.section-header[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 60px;\n}\n.text-center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n.white-text[_ngcontent-%COMP%] {\n    color: #FFF;\n}\nh2[_ngcontent-%COMP%] {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 700;\n    margin-top: 0px;\n    margin-bottom: 20px;\n}\n.title[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: block;\n    height: 4px;\n    width: 40px;\n    background-color: #6195FF;\n   \n}\n.text-center[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:after {\n    margin: 20px auto 0px;\n}\n.col-md-12[_ngcontent-%COMP%]{\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n}\n.footer-logo[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 40px;\n}\n.footer-follow[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n}\n.footer-follow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 72px;\n    height: 72px;\n    line-height: 80px;\n    text-align: center;\n    border-radius: 3px;\n    \n    \n    transition: all 0.4s;\n}\na[_ngcontent-%COMP%] {\n    background-color: transparent;\n}\n[_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before {\n    \n    box-sizing: border-box;\n}\nul[_ngcontent-%COMP%] {\n    \n     margin: 0;\n    padding: 0;\n    list-style: none;\n    \n    display: block;\n    \n    -webkit-margin-before: 1em;\n    \n            margin-block-start: 1em;\n    -webkit-margin-after: 1em;\n            margin-block-end: 1em;\n    -webkit-margin-start: 0px;\n            margin-inline-start: 0px;\n    -webkit-margin-end: 0px;\n            margin-inline-end: 0px;\n    -webkit-padding-start: 40px;\n            padding-inline-start: 40px;\n}\n.section-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-transform: capitalize;\n}\n@media only screen and (max-width: 767px){\n.section-header[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 31.5px;\n}\n}\n@media (min-width: 350px){\n .btn-facebook[_ngcontent-%COMP%] {\n    padding-top: 14px;\n}\n}\n@media (min-width: 350px){\n.btn[_ngcontent-%COMP%]{\n    font-size: 9px;\n    line-height: 1;\n    border-radius: 500px;\n}\n}\ndiv[_ngcontent-%COMP%]{\n    display: block;\n}\n.col-xs-12[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    float: left;\n}\n.divider[_ngcontent-%COMP%] {\n    border-top: 1px solid #d9dadc;\n    display: block;\n    line-height: 1px;\n    margin: 15px 0;\n    position: relative;\n    text-align: center;\n}\n.row[_ngcontent-%COMP%] {\n    margin-left: -15px;\n    margin-right: -15px;\n}\nnav[_ngcontent-%COMP%]{\n    background: #00FFFF;\n    height: 80px;\n    width:90%;\n    margin:auto;\n   \n   text-align: center;\nvisibility: hidden;\npadding-top: 5px;\npadding-bottom: 10px;\n   \n    border-radius: 50px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]\n{\n    padding-bottom: 20px;\n    margin-right: 20px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    display:inline-block;\n   \n    line-height: 80px;\n    margin: -15px 50px;\n    padding-bottom: 20px;\n    font-size: 25px;\n}\n.checkbtn[_ngcontent-%COMP%]{\n    font-size:30px;\n    color: white;\n    float: left;\n    line-height: 80px;\n    margin-left: 10px;\n    \n    cursor: pointer;\n}\n#check[_ngcontent-%COMP%]{\n    display:none;\n}\n.user-p[_ngcontent-%COMP%]\n{\n    border-radius: 50%;\n    -o-object-fit:cover;\n       object-fit:cover;\n   -o-object-position:50% 50%;\n      object-position:50% 50%;\n   height: 200px;\n   width: 200px;\n   image-rendering: high-quality;\n   float: left;\n   \n}\nu[_ngcontent-%COMP%]{\n-webkit-text-decoration-color: orange;\n        text-decoration-color: orange;\n}\n\n.fa-envelope[_ngcontent-%COMP%]\n{\n    float: left;\n    padding-left: 50px;\n   padding-right: 10px;\n    padding-top: 7px;\n}\n.edit[_ngcontent-%COMP%]\n{\n    float: left;\n   padding-left: 15px;\n   padding-right: 15px;\n    \n    \n    margin-left: 50px;\n    background-color: black;\n    color: whitesmoke;\n\n\n}\n.logout[_ngcontent-%COMP%]\n{\n    border:none;\n    background: none;\n    color: #FF6347;\n}\n\n.hey[_ngcontent-%COMP%]\n{\n    width:50%;\n    height: 300px;\n    margin-left: 100px;\n    margin-top: 0px;\n    background-color: none;\n    \n}\n.form[_ngcontent-%COMP%]\n{\n    width: 80%;\n    height: 25%;\n    position: relative;\n    overflow: hidden;\n    visibility: hidden;\n    \n    \n    \n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    padding-top: 20px;\n    border: none;\n    outline: none;\n    color: deeppink;\n    background: transparent;\n    \n}\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom:0px;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    border-bottom: 1px solid black;\n    color:deeppink;\n    \n}\n\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\n    content: \"\";\n    height:50%;\n    width:100%;\n    position: absolute;\n     border-bottom: 3px solid blue;\n     left: 0px;\n     bottom: -1px;\n     transform: translateX(-100%);\n     transition: transfom 0.3s ease;\n}\n.content-name[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom:5px;\n    transition: all 0.3s ease;\n\n}\n.content-namezz[_ngcontent-%COMP%]\n{\ncolor: goldenrod;\nfont-size: 14px;\npadding-top: 5px;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-name[_ngcontent-%COMP%]   .content-name[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-name[_ngcontent-%COMP%]   .content-name[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-name[_ngcontent-%COMP%]   .content-name[_ngcontent-%COMP%]\n{\n    transform: translateY(-150%);\n    font-size: 14px;\n    color: goldenrod;\n    \n    \n\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-name[_ngcontent-%COMP%]::after, .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-name[_ngcontent-%COMP%]::after{\n    transform: translateX(0%);\n}\n.forma[_ngcontent-%COMP%]\n{\n    width: 80%;\n    height: 25%;\n    position: relative;\n    overflow: hidden;\n    visibility: hidden;\n   \n}\n.forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    padding-top: 20px;\n    border: none;\n    outline: none;\n    background: transparent;\n    color: deeppink;\n}\n.forma[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom:0px;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    border-bottom: 1px solid black;\n    color: deeppink;\n    \n}\n\n.forma[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\n    content: \"\";\n    height:100%;\n    width:100%;\n    position: absolute;\n     border-bottom: 3px solid blue;\n     left: 0px;\n     bottom: -1px;\n     transform: translateX(-100%);\n     transition: transfom 0.3s ease;\n    \n}\n.content-namea[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom:5px;\n    transition: all 0.3s ease;\n    border: none;\n    \n}\n.content-nameaz[_ngcontent-%COMP%]\n{\n    color: goldenrod;\n    font-size: 14px;\n}\n.forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namea[_ngcontent-%COMP%]   .content-namea[_ngcontent-%COMP%], .forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namea[_ngcontent-%COMP%]   .content-namea[_ngcontent-%COMP%], .forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namea[_ngcontent-%COMP%]   .content-namea[_ngcontent-%COMP%]\n{\n    transform: translateY(-150%);\n    font-size: 14px;\n    color: goldenrod;\n\n}\n.forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namea[_ngcontent-%COMP%]::after, .forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namea[_ngcontent-%COMP%]::after{\n    transform: translateX(0%);\n}\n.formb[_ngcontent-%COMP%]\n{\n    width: 80%;\n    height: 25%;\n    position: relative;\n    overflow: hidden;\n    visibility: hidden;\n}\n.formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    padding-top: 20px;\n    border: none;\n    outline: none;\n    background: transparent;\n    color: deeppink;\n}\n.formb[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom:0px;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    border-bottom: 1px solid black;\n    color: deeppink;\n}\n\n.formb[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\n    content: \"\";\n    height:100%;\n    width:100%;\n    position: absolute;\n     border-bottom: 3px solid blue;\n     left: 0px;\n     bottom: -1px;\n     transform: translateX(-100%);\n     transition: transfom 0.3s ease;\n}\n.content-nameb[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom:5px;\n    transition: all 0.3s ease;\n\n}\n.formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-nameb[_ngcontent-%COMP%]   .content-nameb[_ngcontent-%COMP%], .formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-nameb[_ngcontent-%COMP%]   .content-nameb[_ngcontent-%COMP%], .formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-nameb[_ngcontent-%COMP%]   .content-nameb[_ngcontent-%COMP%]\n{\n    transform: translateY(-150%);\n    font-size: 14px;\n    color: goldenrod;\n\n}\n.formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-nameb[_ngcontent-%COMP%]::after, .formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-nameb[_ngcontent-%COMP%]::after{\n    transform: translateX(0%);\n}\n.formc[_ngcontent-%COMP%]\n{\n    width: 80%;\n    height: 25%;\n    position: relative;\n    overflow: hidden;\n    visibility: hidden;\n}\n.formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    padding-top: 20px;\n    border: none;\n    outline: none;\n    background: transparent;\n    color: deeppink;\n}\n.formc[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom:0px;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    border-bottom: 1px solid black;\n    color: deeppink;\n}\n\n.formc[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\n    content: \"\";\n    height:100%;\n    width:100%;\n    position: absolute;\n     border-bottom: 3px solid blue;\n     left: 0px;\n     bottom: -1px;\n     transform: translateX(-100%);\n     transition: transfom 0.3s ease;\n}\n.content-namec[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom:5px;\n    transition: all 0.3s ease;\n\n}\n.formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namec[_ngcontent-%COMP%]   .content-namec[_ngcontent-%COMP%], .formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namec[_ngcontent-%COMP%]   .content-namec[_ngcontent-%COMP%], .formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namec[_ngcontent-%COMP%]   .content-namec[_ngcontent-%COMP%]\n{\n    transform: translateY(-150%);\n    font-size: 14px;\n    color: goldenrod;\n\n}\n.formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namec[_ngcontent-%COMP%]::after, .formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namec[_ngcontent-%COMP%]::after{\n    transform: translateX(0%);\n}\n.edit-info[_ngcontent-%COMP%]\n{\n    visibility: hidden;\n}\n.email[_ngcontent-%COMP%]\n{\n    color: whitesmoke;\n    font-size: 14px;\n    float:right;\n}\n.logout[_ngcontent-%COMP%]:hover {\n    color: #9050AA;\n        background-color:#FF6347;\n        border-radius: 15px;\n  }\n.bset[_ngcontent-%COMP%]\n  {\nopacity: 0.8;\nheight: 200vh;\nbackground-size: 100% 100%;\n  }\n.card-body[_ngcontent-%COMP%]\n{\n    visibility: hidden;\n}\n.container[_ngcontent-%COMP%] {\n    display: inline-block;\n    cursor: pointer;\n    margin-left:5px;\n  }\n.bar1[_ngcontent-%COMP%], .bar2[_ngcontent-%COMP%], .bar3[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 5px;\n    background-color:whitesmoke;\n    margin: 6px 0;\n    transition: 0.4s;\n  }\n.change[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n    transform: rotate(-45deg) translate(-9px, 6px);\n  }\n.change[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {opacity: 0;}\n.change[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n    transform: rotate(45deg) translate(-8px, -8px);\n  }\n.dashi[_ngcontent-%COMP%]\n  {\n      float: left;\n      \n      \n      width:520px;\n  }\n.vl[_ngcontent-%COMP%] {\n      \n    border-left: 1px solid gray;\n    height: 1000px;\n    float:left;\n  }\n\n.col-sm-.col-sm-offset-3[_ngcontent-%COMP%]\n{\nfloat: left;\n}\n.setting[_ngcontent-%COMP%]\n{\n    height: 1000px;\n}\n.imgggg[_ngcontent-%COMP%]\n{\n  opacity:0.8;\n  width: 800px;\n  border-radius: 10%;\n}\n.merge[_ngcontent-%COMP%]\n{\n  \n    border-bottom: cyan;\n    height: 1000px;\n    width:800px;\n    \n}\n.wrapperi[_ngcontent-%COMP%] {\n    position: relative;\n    perspective: 40em;\n   \n    display: grid;\n    transform-style: preserve-3d;\n    float: left;\n    padding-left: 150px;\n    padding-top: 220px;\n    padding-right: 100px;\n   \n    \n   \n  }\n.card[_ngcontent-%COMP%] {\n    grid-area: 1 / 1;\n    height: 150px;\n    width: 200px;\n    transform: translateX(10px) rotateY(25deg) rotateX(10deg);\n    background: rgba(249, 198, 26, 0.88);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    \n    color: #000;\n    text-transform: uppercase;\n    font-size: 30px;\n    font-weight: 800;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    box-shadow: 0 10px 30px -3px rgba(0,0,0,.1);\n  }\nh4[_ngcontent-%COMP%] {\n    font-size: 60px;\n    font-weight: 800;\n  }\n.card[_ngcontent-%COMP%]   .enclosed[_ngcontent-%COMP%] {\n    background: #000;\n    line-height: 1;\n    color: rgba(249, 198, 26, 1);\n    padding: 0 5px;\n    display: inline-block;\n    transform: translate(-1px, 1px) scale(0.75);\n    transform-origin: right center;\n  }\n.wrapperi[_ngcontent-%COMP%]:before {\n    --bw: 9px;\n    grid-area: 1 / 1;\n    content: '';\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    height: 100%;\n    width: 100%;\n    margin-top: calc(-1 * var(--bw));\n    margin-left: calc(-1 * var(--bw));\n    background: transparent;\n    transform: translateX(-60px) rotateY(-30deg) rotateX(15deg) scale(1.03);\n    pointer-events: none;\n    border: var(--bw) solid #000;\n    box-sizing: content-box;\n  }\n.wrapperi[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%], .wrapperi[_ngcontent-%COMP%]:hover:before {\n    transform: none;\n  }\n.wrapperi[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .wrapperi[_ngcontent-%COMP%]:before {\n    will-change: transform;\n    transition: .3s transform cubic-bezier(.25,.46,.45,1);\n  }\n.wrapper2[_ngcontent-%COMP%] {\n    position: relative;\n    perspective: 40em;\n   float:left;\n    display: grid;\n    transform-style: preserve-3d;\n    \n    padding-left: 50px;\n    padding-top: 200px;\n    padding-right: 100px;\n    \n    \n  }\n.card2[_ngcontent-%COMP%] {\n    grid-area: 1 / 1;\n    height: 150px;\n    width:200px;\n    transform: translateX(10px) rotateY(25deg) rotateX(10deg);\n    background: rgba(249, 198, 26, 0.88);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    \n    \n    color: #000;\n    text-transform: uppercase;\n    font-size: 30px;\n    font-weight: 800;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    box-shadow: 0 10px 30px -3px rgba(0,0,0,.1);\n  }\nh4[_ngcontent-%COMP%] {\n    font-size: 30px;\n    font-weight: 800;\n  }\n.card2[_ngcontent-%COMP%]   .enclosed2[_ngcontent-%COMP%] {\n    background: #000;\n    line-height: 1;\n    color: rgba(249, 198, 26, 1);\n    padding: 0 5px;\n    display: inline-block;\n    transform: translate(-1px, 1px) scale(0.75);\n    transform-origin: right center;\n  }\n.wrapper2[_ngcontent-%COMP%]:before {\n    --bw: 9px;\n    grid-area: 1 / 1;\n    content: '';\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    height: 100%;\n    width: 100%;\n    margin-top: calc(-1 * var(--bw));\n    margin-left: calc(-1 * var(--bw));\n    background: transparent;\n    transform: translateX(-60px) rotateY(-30deg) rotateX(15deg) scale(1.03);\n    pointer-events: none;\n    border: var(--bw) solid #000;\n    box-sizing: content-box;\n  }\n.wrapper2[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%], .wrapper2[_ngcontent-%COMP%]:hover:before {\n    transform: none;\n  }\n.wrapper2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .wrapper2[_ngcontent-%COMP%]:before {\n    will-change: transform;\n    transition: .3s transform cubic-bezier(.25,.46,.45,1);\n  }\n.caption[_ngcontent-%COMP%]\n  {\n    background-color: blue;\n    font-size: 100px;\n    height:100px;\n  }\n.trying[_ngcontent-%COMP%]\n{\n    float: left;\n    width:1200px;\n    padding-left: 0px;\n    padding-right: 0px;\n    padding-top: 0px;\n    background-color: #3b5998;\n    margin-left: 0px;\n   \n}\n.carouselk[_ngcontent-%COMP%]{\n    \n    width:800px;\n    \n    \n   float: left;\n   position: relative;\n}\n.carouselkk[_ngcontent-%COMP%]\n{\n    \n    \n    width:800px;\n    align-items: center;\n    float: left;\n}\n.col-sm-[_ngcontent-%COMP%]   col-sm-offset-3[_ngcontent-%COMP%]\n{\nfloat: left;\n}\n.h1class[_ngcontent-%COMP%]\n{\n    font-size: 60px;\n    font-weight: 600;\n}\n.h3class[_ngcontent-%COMP%]\n{\n    font-size: 30px;\n}\n.tech[_ngcontent-%COMP%] \n{\n    font-size: 70px;\n}\n#choose-file[_ngcontent-%COMP%]\n{\n    position: relative;\n    overflow: hidden;\n    font-size: 20px;\n}\n#chosenz[_ngcontent-%COMP%]\n{\n    position: absolute;\n    font-size: 50px;\n    opacity: 0;\n    right: 0;\n    top: 0;\n   \n}\n#butu[_ngcontent-%COMP%] \n{\n    font-size: 20px;\n    padding-left: 60px;\n    padding-right: 60px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG9CQUFvQjs7OztJQUlwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksMEVBQTBFO0FBQzlFO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCOztJQUV0QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFFBQVE7O0FBRVo7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFIQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FB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QUVWO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgICBwYWRkaW5nOiAxNnB4IDE0cHggMThweDtcbn1cbi5idG4tZmFjZWJvb2t7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5OFxufVxuLmJ0bi1ibG9ja3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbjphdXRvO1xufVxuLmJ0bntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gICAgXG4gICAgXG4gICAgXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuLmJ0bi1mYWNlYm9vazpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3Juc2lsaztcbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBjaXJjdWxhci1zcG90aWZ5LXVpLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xufVxuLmJ0biAge1xuICAgIFxuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuaW1ne1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyOjA7XG4gICAgXG59XG4uYmctZGFya3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLnNtLXBhZGRpbmd7XG4gICAgcGFkZGluZy10b3A6IDYwcHggO1xuICAgIHBhZGRpbmctYm90dG9tIDogNjBweDtcbn1cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcbn1cbi5yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuLnNlY3Rpb24taGVhZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIFxufVxuLnRleHQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ucm93OmJlZm9yZSB7XG4gICAgXG4gICAgY29udGVudDogXCIgXCI7XG59XG46YmVmb3JlIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTk1RkY7XG4gICAgY29sb3I6ICNGRkY7XG59XG4uc2VjdGlvbi1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2hpdGUtdGV4dCB7XG4gICAgY29sb3I6ICNGRkY7XG59XG5oMiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpdGxlOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTk1RkY7XG4gICBcbn1cbi50ZXh0LWNlbnRlciAudGl0bGU6YWZ0ZXIge1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweDtcbn1cbi5jb2wtbWQtMTJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5mb290ZXItbG9nbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uZm9vdGVyLWZvbGxvdyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZm9vdGVyLWZvbGxvdyBsaSBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcycHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgXG4gICAgXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5hIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjphZnRlciwgOmJlZm9yZSB7XG4gICAgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxudWwge1xuICAgIFxuICAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDBweDtcbn1cbi5zZWN0aW9uLWhlYWRlciAudGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XG4uc2VjdGlvbi1oZWFkZXIgaDIudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzEuNXB4O1xufVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpe1xuIC5idG4tZmFjZWJvb2sge1xuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xufVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KXtcbi5idG57XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG59XG59XG5kaXZ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uY29sLXhzLTEyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmRpdmlkZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDlkYWRjO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxubmF2e1xuICAgIGJhY2tncm91bmQ6ICMwMEZGRkY7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOjkwJTtcbiAgICBtYXJnaW46YXV0bztcbiAgIFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xudmlzaWJpbGl0eTogaGlkZGVuO1xucGFkZGluZy10b3A6IDVweDtcbnBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbm5hdiB1bFxue1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbm5hdiB1bCBsaXtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgIFxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogLTE1cHggNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4uY2hlY2tidG57XG4gICAgZm9udC1zaXplOjMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjaGVja3tcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4udXNlci1wXG57XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9iamVjdC1maXQ6Y292ZXI7XG4gICBvYmplY3QtcG9zaXRpb246NTAlIDUwJTtcbiAgIGhlaWdodDogMjAwcHg7XG4gICB3aWR0aDogMjAwcHg7XG4gICBpbWFnZS1yZW5kZXJpbmc6IGhpZ2gtcXVhbGl0eTtcbiAgIGZsb2F0OiBsZWZ0O1xuICAgXG59XG51e1xudGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBvcmFuZ2U7XG59XG4vKi5lbWFpbFxue1xuICAgIFxuICAgIHBhZGRpbmctbGVmdDogMTUwcHg7XG59Ki9cbi5mYS1lbnZlbG9wZVxue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbn1cbi5lZGl0XG57XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIFxuICAgIFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuXG5cbn1cbi5sb2dvdXRcbntcbiAgICBib3JkZXI6bm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjRkY2MzQ3O1xufVxuLyojbmFtZVxue1xuICAgIFxuICAgIFxufSovXG5cbi5oZXlcbntcbiAgICB3aWR0aDo1MCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgXG59XG4uZm9ybVxue1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIFxuICAgIFxuICAgIFxufVxuLmZvcm0gaW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiBkZWVwcGluaztcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBcbn1cbi5mb3JtIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOjBweDtcbiAgICBsZWZ0OiAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOmRlZXBwaW5rO1xuICAgIFxufVxuLypib2R5e1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblxuXG59Ki9cbi5mb3JtIGxhYmVsOjphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDo1MCU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibHVlO1xuICAgICBsZWZ0OiAwcHg7XG4gICAgIGJvdHRvbTogLTFweDtcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgdHJhbnNpdGlvbjogdHJhbnNmb20gMC4zcyBlYXNlO1xufVxuLmNvbnRlbnQtbmFtZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOjVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG59LmNvbnRlbnQtbmFtZXp6XG57XG5jb2xvcjogZ29sZGVucm9kO1xuZm9udC1zaXplOiAxNHB4O1xucGFkZGluZy10b3A6IDVweDtcbn1cblxuLmZvcm0gaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZSAuY29udGVudC1uYW1lLFxuLmZvcm0gaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZSAuY29udGVudC1uYW1lLFxuLmZvcm0gaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZSAuY29udGVudC1uYW1lXG57XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IGdvbGRlbnJvZDtcbiAgICBcbiAgICBcblxufVxuLmZvcm0gaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZTo6YWZ0ZXIsXG4uZm9ybSBpbnB1dDp2YWxpZCArIC5sYWJlbC1uYW1lOjphZnRlcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuLmZvcm1hXG57XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICBcbn1cbi5mb3JtYSBpbnB1dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IGRlZXBwaW5rO1xufVxuLmZvcm1hIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOjBweDtcbiAgICBsZWZ0OiAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOiBkZWVwcGluaztcbiAgICBcbn1cbi8qYm9keXtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cblxufSovXG4uZm9ybWEgbGFiZWw6OmFmdGVye1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibHVlO1xuICAgICBsZWZ0OiAwcHg7XG4gICAgIGJvdHRvbTogLTFweDtcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgdHJhbnNpdGlvbjogdHJhbnNmb20gMC4zcyBlYXNlO1xuICAgIFxufVxuLmNvbnRlbnQtbmFtZWF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTo1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgXG59XG4uY29udGVudC1uYW1lYXpcbntcbiAgICBjb2xvcjogZ29sZGVucm9kO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb3JtYSBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYSAuY29udGVudC1uYW1lYSxcbi5mb3JtYSBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYSAuY29udGVudC1uYW1lYSxcbi5mb3JtYSBpbnB1dDp2YWxpZCArIC5sYWJlbC1uYW1lYSAuY29udGVudC1uYW1lYVxue1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XG5cbn1cbi5mb3JtYSBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYTo6YWZ0ZXIsXG4uZm9ybWEgaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZWE6OmFmdGVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG59XG5cbi5mb3JtYlxue1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmZvcm1iIGlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogZGVlcHBpbms7XG59XG4uZm9ybWIgbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206MHB4O1xuICAgIGxlZnQ6IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgY29sb3I6IGRlZXBwaW5rO1xufVxuLypib2R5e1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblxuXG59Ki9cbi5mb3JtYiBsYWJlbDo6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XG4gICAgIGxlZnQ6IDBweDtcbiAgICAgYm90dG9tOiAtMXB4O1xuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICB0cmFuc2l0aW9uOiB0cmFuc2ZvbSAwLjNzIGVhc2U7XG59XG4uY29udGVudC1uYW1lYntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOjVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG59XG4uZm9ybWIgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWIgLmNvbnRlbnQtbmFtZWIsXG4uZm9ybWIgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWIgLmNvbnRlbnQtbmFtZWIsXG4uZm9ybWIgaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZWIgLmNvbnRlbnQtbmFtZWJcbntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogZ29sZGVucm9kO1xuXG59XG4uZm9ybWIgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWI6OmFmdGVyLFxuLmZvcm1iIGlucHV0OnZhbGlkICsgLmxhYmVsLW5hbWViOjphZnRlcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuLmZvcm1jXG57XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uZm9ybWMgaW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBkZWVwcGluaztcbn1cbi5mb3JtYyBsYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTowcHg7XG4gICAgbGVmdDogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjogZGVlcHBpbms7XG59XG4vKmJvZHl7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXG5cbn0qL1xuLmZvcm1jIGxhYmVsOjphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmx1ZTtcbiAgICAgbGVmdDogMHB4O1xuICAgICBib3R0b206IC0xcHg7XG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgIHRyYW5zaXRpb246IHRyYW5zZm9tIDAuM3MgZWFzZTtcbn1cbi5jb250ZW50LW5hbWVje1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206NXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbn1cbi5mb3JtYyBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYyAuY29udGVudC1uYW1lYyxcbi5mb3JtYyBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYyAuY29udGVudC1uYW1lYyxcbi5mb3JtYyBpbnB1dDp2YWxpZCArIC5sYWJlbC1uYW1lYyAuY29udGVudC1uYW1lY1xue1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XG5cbn1cbi5mb3JtYyBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYzo6YWZ0ZXIsXG4uZm9ybWMgaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZWM6OmFmdGVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG59XG4uZWRpdC1pbmZvXG57XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmVtYWlsXG57XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZsb2F0OnJpZ2h0O1xufVxuLmxvZ291dDpob3ZlciB7XG4gICAgY29sb3I6ICM5MDUwQUE7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I0ZGNjM0NztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICAuYnNldFxuICB7XG5vcGFjaXR5OiAwLjg7XG5oZWlnaHQ6IDIwMHZoO1xuYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIH1cbi5jYXJkLWJvZHlcbntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OjVweDtcbiAgfVxuICBcbiAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xuICAgIG1hcmdpbjogNnB4IDA7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgfVxuICBcbiAgLmNoYW5nZSAuYmFyMSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XG4gIH1cbiAgXG4gIC5jaGFuZ2UgLmJhcjIge29wYWNpdHk6IDA7fVxuICBcbiAgLmNoYW5nZSAuYmFyMyB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XG4gIH1cbiAgLmRhc2hpXG4gIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgLypwYWRkaW5nLXJpZ2h0OiA1MHB4OyovXG4gICAgICBcbiAgICAgIHdpZHRoOjUyMHB4O1xuICB9XG4gIC52bCB7XG4gICAgICBcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG4gICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgZmxvYXQ6bGVmdDtcbiAgfVxuICAvKi5jYXJyeW1pbmF0aVxuICB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgfSovXG4gIFxuLmNvbC1zbS0uY29sLXNtLW9mZnNldC0zXG57XG5mbG9hdDogbGVmdDtcbn1cblxuXG4gIFxuICAuc2V0dGluZ1xue1xuICAgIGhlaWdodDogMTAwMHB4O1xufVxuLmltZ2dnZ1xue1xuICBvcGFjaXR5OjAuODtcbiAgd2lkdGg6IDgwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG4ubWVyZ2VcbntcbiAgXG4gICAgYm9yZGVyLWJvdHRvbTogY3lhbjtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICB3aWR0aDo4MDBweDtcbiAgICBcbn1cbi53cmFwcGVyaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBlcnNwZWN0aXZlOiA0MGVtO1xuICAgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICAgXG4gICAgXG4gICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MzQ3OyovXG4gIH1cbiAgXG4gIC5jYXJkIHtcbiAgICBncmlkLWFyZWE6IDEgLyAxO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KSByb3RhdGVZKDI1ZGVnKSByb3RhdGVYKDEwZGVnKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTk4LCAyNiwgMC44OCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKnBhZGRpbmc6IDMwcHg7Ki9cbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtM3B4IHJnYmEoMCwwLDAsLjEpO1xuICB9XG4gIFxuICBoNCB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbiAgXG4gIC5jYXJkIC5lbmNsb3NlZCB7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogcmdiYSgyNDksIDE5OCwgMjYsIDEpO1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAxcHgpIHNjYWxlKDAuNzUpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcbiAgfVxuICBcbiAgLndyYXBwZXJpOmJlZm9yZSB7XG4gICAgLS1idzogOXB4O1xuICAgIGdyaWQtYXJlYTogMSAvIDE7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tYncpKTtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLWJ3KSk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02MHB4KSByb3RhdGVZKC0zMGRlZykgcm90YXRlWCgxNWRlZykgc2NhbGUoMS4wMyk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyOiB2YXIoLS1idykgc29saWQgIzAwMDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgfVxuICBcbiAgXG4gIC53cmFwcGVyaTpob3ZlciA+IGRpdixcbiAgLndyYXBwZXJpOmhvdmVyOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIFxuICBcbiAgLndyYXBwZXJpID4gZGl2LFxuICAud3JhcHBlcmk6YmVmb3JlIHtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb246IC4zcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LDEpO1xuICB9XG4gIC53cmFwcGVyMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBlcnNwZWN0aXZlOiA0MGVtO1xuICAgZmxvYXQ6bGVmdDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbiAgICBcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNGRjYzNDc7Ki9cbiAgfVxuICBcbiAgLmNhcmQyIHtcbiAgICBncmlkLWFyZWE6IDEgLyAxO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpIHJvdGF0ZVkoMjVkZWcpIHJvdGF0ZVgoMTBkZWcpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxOTgsIDI2LCAwLjg4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qcGFkZGluZzogMzBweDsqL1xuICAgIFxuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0zcHggcmdiYSgwLDAsMCwuMSk7XG4gIH1cbiAgXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICBcbiAgLmNhcmQyIC5lbmNsb3NlZDIge1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6IHJnYmEoMjQ5LCAxOTgsIDI2LCAxKTtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMXB4KSBzY2FsZSgwLjc1KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XG4gIH1cbiAgXG4gIC53cmFwcGVyMjpiZWZvcmUge1xuICAgIC0tYnc6IDlweDtcbiAgICBncmlkLWFyZWE6IDEgLyAxO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLWJ3KSk7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1idykpO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNjBweCkgcm90YXRlWSgtMzBkZWcpIHJvdGF0ZVgoMTVkZWcpIHNjYWxlKDEuMDMpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlcjogdmFyKC0tYncpIHNvbGlkICMwMDA7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIH1cbiAgXG4gIFxuICAud3JhcHBlcjI6aG92ZXIgPiBkaXYsXG4gIC53cmFwcGVyMjpob3ZlcjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICBcbiAgXG4gIC53cmFwcGVyMiA+IGRpdixcbiAgLndyYXBwZXIyOmJlZm9yZSB7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwxKTtcbiAgfVxuICAuY2FwdGlvblxuICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGhlaWdodDoxMDBweDtcbiAgfVxuLnRyeWluZ1xue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOjEyMDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICBcbn1cbi5jYXJvdXNlbGt7XG4gICAgXG4gICAgd2lkdGg6ODAwcHg7XG4gICAgXG4gICAgXG4gICBmbG9hdDogbGVmdDtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJvdXNlbGtrXG57XG4gICAgXG4gICAgXG4gICAgd2lkdGg6ODAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5jb2wtc20tIGNvbC1zbS1vZmZzZXQtM1xue1xuZmxvYXQ6IGxlZnQ7XG59XG4uaDFjbGFzc1xue1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmgzY2xhc3NcbntcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4udGVjaCBcbntcbiAgICBmb250LXNpemU6IDcwcHg7XG59XG4jY2hvb3NlLWZpbGVcbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4jY2hvc2Vuelxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICBcbn1cbiNidXR1IFxue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn0iXX0= */", ".btn[_ngcontent-%COMP%] {\n    padding: 16px 14px 18px;\n}\n.btn-facebook[_ngcontent-%COMP%]{\n    color: #fff;\n    background-color: #3b5998\n}\n.btn-block[_ngcontent-%COMP%]{\n    display: block;\n    width: 30%;\n    margin:auto;\n}\n.btn[_ngcontent-%COMP%]{\n    font-size: 14px;\n    line-height: 1;\n    border-radius: 500px;\n    \n    \n    \n    border-width: 0;\n    letter-spacing: 2px;\n    min-width: 160px;\n    text-transform: uppercase;\n    white-space: normal;\n}\n.btn-facebook[_ngcontent-%COMP%] {\n    padding-top: 14px;\n}\n.btn-facebook[_ngcontent-%COMP%]:hover{\n    background-color: cornsilk;\n}\nbody[_ngcontent-%COMP%] {\n    font-family: circular-spotify-ui,Helvetica Neue,Helvetica,Arial,sans-serif;\n}\n.btn[_ngcontent-%COMP%]  {\n    \n    margin-bottom: 0;\n    font-weight: 700;\n    text-align: center;\n    vertical-align: middle;\n   \n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n}\nimg[_ngcontent-%COMP%]{\n    vertical-align: middle;\n    border:0;\n    \n}\n.bg-dark[_ngcontent-%COMP%]{\n    background-color: #000;\n}\n.sm-padding[_ngcontent-%COMP%]{\n    padding-top: 60px ;\n    padding-bottom : 60px;\n}\n.container[_ngcontent-%COMP%]{\n    padding: 15px 0px;\n    margin-right:auto;\n    margin-left:auto;\n}\n.row[_ngcontent-%COMP%] {\n    margin-left: -15px;\n    margin-right: -15px;\n}\n.section-header[_ngcontent-%COMP%]{\n    position: relative;\n    margin-bottom: 60px;\n    \n}\n.text-center[_ngcontent-%COMP%]{\n    text-align: center;\n}\ndiv[_ngcontent-%COMP%] {\n    display: block;\n}\n.row[_ngcontent-%COMP%]:before {\n    \n    content: \" \";\n}\n[_ngcontent-%COMP%]:before {\n    box-sizing: border-box;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n    background-color: #6195FF;\n    color: #FFF;\n}\n[_ngcontent-%COMP%]::selection {\n    background-color: #6195FF;\n    color: #FFF;\n}\n.section-header[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 60px;\n}\n.text-center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n.white-text[_ngcontent-%COMP%] {\n    color: #FFF;\n}\nh2[_ngcontent-%COMP%] {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 700;\n    margin-top: 0px;\n    margin-bottom: 20px;\n}\n.title[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: block;\n    height: 4px;\n    width: 40px;\n    background-color: #6195FF;\n   \n}\n.text-center[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:after {\n    margin: 20px auto 0px;\n}\n.col-md-12[_ngcontent-%COMP%]{\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n}\n.footer-logo[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 40px;\n}\n.footer-follow[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n}\n.footer-follow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 72px;\n    height: 72px;\n    line-height: 80px;\n    text-align: center;\n    border-radius: 3px;\n    \n    \n    transition: all 0.4s;\n}\na[_ngcontent-%COMP%] {\n    background-color: transparent;\n}\n[_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before {\n    \n    box-sizing: border-box;\n}\nul[_ngcontent-%COMP%] {\n    \n     margin: 0;\n    padding: 0;\n    list-style: none;\n    \n    display: block;\n    \n    -webkit-margin-before: 1em;\n    \n            margin-block-start: 1em;\n    -webkit-margin-after: 1em;\n            margin-block-end: 1em;\n    -webkit-margin-start: 0px;\n            margin-inline-start: 0px;\n    -webkit-margin-end: 0px;\n            margin-inline-end: 0px;\n    -webkit-padding-start: 40px;\n            padding-inline-start: 40px;\n}\n.section-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-transform: capitalize;\n}\n@media only screen and (max-width: 767px){\n.section-header[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 31.5px;\n}\n}\n@media (min-width: 350px){\n .btn-facebook[_ngcontent-%COMP%] {\n    padding-top: 14px;\n}\n}\n@media (min-width: 350px){\n.btn[_ngcontent-%COMP%]{\n    font-size: 9px;\n    line-height: 1;\n    border-radius: 500px;\n}\n}\ndiv[_ngcontent-%COMP%]{\n    display: block;\n}\n.col-xs-12[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    float: left;\n}\n.divider[_ngcontent-%COMP%] {\n    border-top: 1px solid #d9dadc;\n    display: block;\n    line-height: 1px;\n    margin: 15px 0;\n    position: relative;\n    text-align: center;\n}\n.row[_ngcontent-%COMP%] {\n    margin-left: -15px;\n    margin-right: -15px;\n}\nnav[_ngcontent-%COMP%]{\n    background: #00FFFF;\n    height: 80px;\n    width:90%;\n    margin:auto;\n   \n   text-align: center;\nvisibility: hidden;\npadding-top: 5px;\npadding-bottom: 10px;\n   \n    border-radius: 50px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]\n{\n    padding-bottom: 20px;\n    margin-right: 20px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    display:inline-block;\n   \n    line-height: 80px;\n    margin: -15px 50px;\n    padding-bottom: 20px;\n    font-size: 25px;\n}\n.checkbtn[_ngcontent-%COMP%]{\n    font-size:30px;\n    color: white;\n    float: left;\n    line-height: 80px;\n    margin-left: 10px;\n    \n    cursor: pointer;\n}\n#check[_ngcontent-%COMP%]{\n    display:none;\n}\n.user-p[_ngcontent-%COMP%]\n{\n    border-radius: 50%;\n    -o-object-fit:cover;\n       object-fit:cover;\n   -o-object-position:50% 50%;\n      object-position:50% 50%;\n   height: 200px;\n   width: 200px;\n   image-rendering: high-quality;\n   float: left;\n   \n}\nu[_ngcontent-%COMP%]{\n-webkit-text-decoration-color: orange;\n        text-decoration-color: orange;\n}\n\n.fa-envelope[_ngcontent-%COMP%]\n{\n    float: left;\n    padding-left: 50px;\n   padding-right: 10px;\n    padding-top: 7px;\n}\n.edit[_ngcontent-%COMP%]\n{\n    float: left;\n   padding-left: 15px;\n   padding-right: 15px;\n    \n    \n    margin-left: 50px;\n    background-color: black;\n    color: whitesmoke;\n\n\n}\n.logout[_ngcontent-%COMP%]\n{\n    border:none;\n    background: none;\n    color: #FF6347;\n}\n\n.hey[_ngcontent-%COMP%]\n{\n    width:50%;\n    height: 300px;\n    margin-left: 100px;\n    margin-top: 0px;\n    background-color: none;\n    \n}\n.form[_ngcontent-%COMP%]\n{\n    width: 80%;\n    height: 25%;\n    position: relative;\n    overflow: hidden;\n    visibility: hidden;\n    \n    \n    \n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    padding-top: 20px;\n    border: none;\n    outline: none;\n    color: deeppink;\n    background: transparent;\n    \n}\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom:0px;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    border-bottom: 1px solid black;\n    color:deeppink;\n    \n}\n\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\n    content: \"\";\n    height:50%;\n    width:100%;\n    position: absolute;\n     border-bottom: 3px solid blue;\n     left: 0px;\n     bottom: -1px;\n     transform: translateX(-100%);\n     transition: transfom 0.3s ease;\n}\n.content-name[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom:5px;\n    transition: all 0.3s ease;\n\n}\n.content-namezz[_ngcontent-%COMP%]\n{\ncolor: goldenrod;\nfont-size: 14px;\npadding-top: 5px;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-name[_ngcontent-%COMP%]   .content-name[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-name[_ngcontent-%COMP%]   .content-name[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-name[_ngcontent-%COMP%]   .content-name[_ngcontent-%COMP%]\n{\n    transform: translateY(-150%);\n    font-size: 14px;\n    color: goldenrod;\n    \n    \n\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-name[_ngcontent-%COMP%]::after, .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-name[_ngcontent-%COMP%]::after{\n    transform: translateX(0%);\n}\n.forma[_ngcontent-%COMP%]\n{\n    width: 80%;\n    height: 25%;\n    position: relative;\n    overflow: hidden;\n    visibility: hidden;\n   \n}\n.forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    padding-top: 20px;\n    border: none;\n    outline: none;\n    background: transparent;\n    color: deeppink;\n}\n.forma[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom:0px;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    border-bottom: 1px solid black;\n    color: deeppink;\n    \n}\n\n.forma[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\n    content: \"\";\n    height:100%;\n    width:100%;\n    position: absolute;\n     border-bottom: 3px solid blue;\n     left: 0px;\n     bottom: -1px;\n     transform: translateX(-100%);\n     transition: transfom 0.3s ease;\n    \n}\n.content-namea[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom:5px;\n    transition: all 0.3s ease;\n    border: none;\n    \n}\n.content-nameaz[_ngcontent-%COMP%]\n{\n    color: goldenrod;\n    font-size: 14px;\n}\n.forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namea[_ngcontent-%COMP%]   .content-namea[_ngcontent-%COMP%], .forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namea[_ngcontent-%COMP%]   .content-namea[_ngcontent-%COMP%], .forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namea[_ngcontent-%COMP%]   .content-namea[_ngcontent-%COMP%]\n{\n    transform: translateY(-150%);\n    font-size: 14px;\n    color: goldenrod;\n\n}\n.forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namea[_ngcontent-%COMP%]::after, .forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namea[_ngcontent-%COMP%]::after{\n    transform: translateX(0%);\n}\n.formb[_ngcontent-%COMP%]\n{\n    width: 80%;\n    height: 25%;\n    position: relative;\n    overflow: hidden;\n    visibility: hidden;\n}\n.formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    padding-top: 20px;\n    border: none;\n    outline: none;\n    background: transparent;\n    color: deeppink;\n}\n.formb[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom:0px;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    border-bottom: 1px solid black;\n    color: deeppink;\n}\n\n.formb[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\n    content: \"\";\n    height:100%;\n    width:100%;\n    position: absolute;\n     border-bottom: 3px solid blue;\n     left: 0px;\n     bottom: -1px;\n     transform: translateX(-100%);\n     transition: transfom 0.3s ease;\n}\n.content-nameb[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom:5px;\n    transition: all 0.3s ease;\n\n}\n.formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-nameb[_ngcontent-%COMP%]   .content-nameb[_ngcontent-%COMP%], .formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-nameb[_ngcontent-%COMP%]   .content-nameb[_ngcontent-%COMP%], .formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-nameb[_ngcontent-%COMP%]   .content-nameb[_ngcontent-%COMP%]\n{\n    transform: translateY(-150%);\n    font-size: 14px;\n    color: goldenrod;\n\n}\n.formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-nameb[_ngcontent-%COMP%]::after, .formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-nameb[_ngcontent-%COMP%]::after{\n    transform: translateX(0%);\n}\n.formc[_ngcontent-%COMP%]\n{\n    width: 80%;\n    height: 25%;\n    position: relative;\n    overflow: hidden;\n    visibility: hidden;\n}\n.formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    padding-top: 20px;\n    border: none;\n    outline: none;\n    background: transparent;\n    color: deeppink;\n}\n.formc[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom:0px;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    border-bottom: 1px solid black;\n    color: deeppink;\n}\n\n.formc[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\n    content: \"\";\n    height:100%;\n    width:100%;\n    position: absolute;\n     border-bottom: 3px solid blue;\n     left: 0px;\n     bottom: -1px;\n     transform: translateX(-100%);\n     transition: transfom 0.3s ease;\n}\n.content-namec[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom:5px;\n    transition: all 0.3s ease;\n\n}\n.formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namec[_ngcontent-%COMP%]   .content-namec[_ngcontent-%COMP%], .formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namec[_ngcontent-%COMP%]   .content-namec[_ngcontent-%COMP%], .formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namec[_ngcontent-%COMP%]   .content-namec[_ngcontent-%COMP%]\n{\n    transform: translateY(-150%);\n    font-size: 14px;\n    color: goldenrod;\n\n}\n.formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namec[_ngcontent-%COMP%]::after, .formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namec[_ngcontent-%COMP%]::after{\n    transform: translateX(0%);\n}\n.edit-info[_ngcontent-%COMP%]\n{\n    visibility: hidden;\n}\n.email[_ngcontent-%COMP%]\n{\n    color: whitesmoke;\n    font-size: 14px;\n    float:right;\n}\n.logout[_ngcontent-%COMP%]:hover {\n    color: #9050AA;\n        background-color:#FF6347;\n        border-radius: 15px;\n  }\n.bset[_ngcontent-%COMP%]\n  {\nopacity: 0.8;\nheight: 200vh;\nbackground-size: 100% 100%;\n  }\n.card-body[_ngcontent-%COMP%]\n{\n    visibility: hidden;\n}\n.container[_ngcontent-%COMP%] {\n    display: inline-block;\n    cursor: pointer;\n    margin-left:5px;\n  }\n.bar1[_ngcontent-%COMP%], .bar2[_ngcontent-%COMP%], .bar3[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 5px;\n    background-color:whitesmoke;\n    margin: 6px 0;\n    transition: 0.4s;\n  }\n.change[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n    transform: rotate(-45deg) translate(-9px, 6px);\n  }\n.change[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {opacity: 0;}\n.change[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n    transform: rotate(45deg) translate(-8px, -8px);\n  }\n.dashi[_ngcontent-%COMP%]\n  {\n      float: left;\n      \n      \n      width:520px;\n  }\n.vl[_ngcontent-%COMP%] {\n      \n    border-left: 1px solid gray;\n    height: 1000px;\n    float:left;\n  }\n\n.col-sm-.col-sm-offset-3[_ngcontent-%COMP%]\n{\nfloat: left;\n}\n.setting[_ngcontent-%COMP%]\n{\n    height: 1000px;\n}\n.imgggg[_ngcontent-%COMP%]\n{\n  opacity:0.8;\n  width: 800px;\n  border-radius: 10%;\n}\n.merge[_ngcontent-%COMP%]\n{\n  \n    border-bottom: cyan;\n    height: 1000px;\n    width:800px;\n    \n}\n.wrapperi[_ngcontent-%COMP%] {\n    position: relative;\n    perspective: 40em;\n   \n    display: grid;\n    transform-style: preserve-3d;\n    float: left;\n    padding-left: 150px;\n    padding-top: 220px;\n    padding-right: 100px;\n   \n    \n   \n  }\n.card[_ngcontent-%COMP%] {\n    grid-area: 1 / 1;\n    height: 150px;\n    width: 200px;\n    transform: translateX(10px) rotateY(25deg) rotateX(10deg);\n    background: rgba(249, 198, 26, 0.88);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    \n    color: #000;\n    text-transform: uppercase;\n    font-size: 30px;\n    font-weight: 800;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    box-shadow: 0 10px 30px -3px rgba(0,0,0,.1);\n  }\nh4[_ngcontent-%COMP%] {\n    font-size: 60px;\n    font-weight: 800;\n  }\n.card[_ngcontent-%COMP%]   .enclosed[_ngcontent-%COMP%] {\n    background: #000;\n    line-height: 1;\n    color: rgba(249, 198, 26, 1);\n    padding: 0 5px;\n    display: inline-block;\n    transform: translate(-1px, 1px) scale(0.75);\n    transform-origin: right center;\n  }\n.wrapperi[_ngcontent-%COMP%]:before {\n    --bw: 9px;\n    grid-area: 1 / 1;\n    content: '';\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    height: 100%;\n    width: 100%;\n    margin-top: calc(-1 * var(--bw));\n    margin-left: calc(-1 * var(--bw));\n    background: transparent;\n    transform: translateX(-60px) rotateY(-30deg) rotateX(15deg) scale(1.03);\n    pointer-events: none;\n    border: var(--bw) solid #000;\n    box-sizing: content-box;\n  }\n.wrapperi[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%], .wrapperi[_ngcontent-%COMP%]:hover:before {\n    transform: none;\n  }\n.wrapperi[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .wrapperi[_ngcontent-%COMP%]:before {\n    will-change: transform;\n    transition: .3s transform cubic-bezier(.25,.46,.45,1);\n  }\n.wrapper2[_ngcontent-%COMP%] {\n    position: relative;\n    perspective: 40em;\n   float:left;\n    display: grid;\n    transform-style: preserve-3d;\n    \n    padding-left: 50px;\n    padding-top: 200px;\n    padding-right: 100px;\n    \n    \n  }\n.card2[_ngcontent-%COMP%] {\n    grid-area: 1 / 1;\n    height: 150px;\n    width:200px;\n    transform: translateX(10px) rotateY(25deg) rotateX(10deg);\n    background: rgba(249, 198, 26, 0.88);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    \n    \n    color: #000;\n    text-transform: uppercase;\n    font-size: 30px;\n    font-weight: 800;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    box-shadow: 0 10px 30px -3px rgba(0,0,0,.1);\n  }\nh4[_ngcontent-%COMP%] {\n    font-size: 30px;\n    font-weight: 800;\n  }\n.card2[_ngcontent-%COMP%]   .enclosed2[_ngcontent-%COMP%] {\n    background: #000;\n    line-height: 1;\n    color: rgba(249, 198, 26, 1);\n    padding: 0 5px;\n    display: inline-block;\n    transform: translate(-1px, 1px) scale(0.75);\n    transform-origin: right center;\n  }\n.wrapper2[_ngcontent-%COMP%]:before {\n    --bw: 9px;\n    grid-area: 1 / 1;\n    content: '';\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    height: 100%;\n    width: 100%;\n    margin-top: calc(-1 * var(--bw));\n    margin-left: calc(-1 * var(--bw));\n    background: transparent;\n    transform: translateX(-60px) rotateY(-30deg) rotateX(15deg) scale(1.03);\n    pointer-events: none;\n    border: var(--bw) solid #000;\n    box-sizing: content-box;\n  }\n.wrapper2[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%], .wrapper2[_ngcontent-%COMP%]:hover:before {\n    transform: none;\n  }\n.wrapper2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .wrapper2[_ngcontent-%COMP%]:before {\n    will-change: transform;\n    transition: .3s transform cubic-bezier(.25,.46,.45,1);\n  }\n.caption[_ngcontent-%COMP%]\n  {\n    background-color: blue;\n    font-size: 100px;\n    height:100px;\n  }\n.trying[_ngcontent-%COMP%]\n{\n    float: left;\n    width:1200px;\n    padding-left: 0px;\n    padding-right: 0px;\n    padding-top: 0px;\n    background-color: #3b5998;\n    margin-left: 0px;\n   \n}\n.carouselk[_ngcontent-%COMP%]{\n    \n    width:800px;\n    \n    \n   float: left;\n   position: relative;\n}\n.carouselkk[_ngcontent-%COMP%]\n{\n    \n    \n    width:800px;\n    align-items: center;\n    float: left;\n}\n.col-sm-[_ngcontent-%COMP%]   col-sm-offset-3[_ngcontent-%COMP%]\n{\nfloat: left;\n}\n.h1class[_ngcontent-%COMP%]\n{\n    font-size: 60px;\n    font-weight: 600;\n}\n.h3class[_ngcontent-%COMP%]\n{\n    font-size: 30px;\n}\n.tech[_ngcontent-%COMP%] \n{\n    font-size: 70px;\n}\n#choose-file[_ngcontent-%COMP%]\n{\n    position: relative;\n    overflow: hidden;\n    font-size: 20px;\n}\n#chosenz[_ngcontent-%COMP%]\n{\n    position: absolute;\n    font-size: 50px;\n    opacity: 0;\n    right: 0;\n    top: 0;\n   \n}\n#butu[_ngcontent-%COMP%] \n{\n    font-size: 20px;\n    padding-left: 60px;\n    padding-right: 60px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG9CQUFvQjs7OztJQUlwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksMEVBQTBFO0FBQzlFO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCOztJQUV0QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFFBQVE7O0FBRVo7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFIQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FB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QUVWO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgICBwYWRkaW5nOiAxNnB4IDE0cHggMThweDtcbn1cbi5idG4tZmFjZWJvb2t7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5OFxufVxuLmJ0bi1ibG9ja3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbjphdXRvO1xufVxuLmJ0bntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gICAgXG4gICAgXG4gICAgXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuLmJ0bi1mYWNlYm9vazpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3Juc2lsaztcbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBjaXJjdWxhci1zcG90aWZ5LXVpLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xufVxuLmJ0biAge1xuICAgIFxuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuaW1ne1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyOjA7XG4gICAgXG59XG4uYmctZGFya3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLnNtLXBhZGRpbmd7XG4gICAgcGFkZGluZy10b3A6IDYwcHggO1xuICAgIHBhZGRpbmctYm90dG9tIDogNjBweDtcbn1cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcbn1cbi5yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuLnNlY3Rpb24taGVhZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIFxufVxuLnRleHQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ucm93OmJlZm9yZSB7XG4gICAgXG4gICAgY29udGVudDogXCIgXCI7XG59XG46YmVmb3JlIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTk1RkY7XG4gICAgY29sb3I6ICNGRkY7XG59XG4uc2VjdGlvbi1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2hpdGUtdGV4dCB7XG4gICAgY29sb3I6ICNGRkY7XG59XG5oMiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpdGxlOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTk1RkY7XG4gICBcbn1cbi50ZXh0LWNlbnRlciAudGl0bGU6YWZ0ZXIge1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweDtcbn1cbi5jb2wtbWQtMTJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5mb290ZXItbG9nbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uZm9vdGVyLWZvbGxvdyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZm9vdGVyLWZvbGxvdyBsaSBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcycHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgXG4gICAgXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5hIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjphZnRlciwgOmJlZm9yZSB7XG4gICAgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxudWwge1xuICAgIFxuICAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDBweDtcbn1cbi5zZWN0aW9uLWhlYWRlciAudGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XG4uc2VjdGlvbi1oZWFkZXIgaDIudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzEuNXB4O1xufVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpe1xuIC5idG4tZmFjZWJvb2sge1xuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xufVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM1MHB4KXtcbi5idG57XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG59XG59XG5kaXZ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uY29sLXhzLTEyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmRpdmlkZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDlkYWRjO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxubmF2e1xuICAgIGJhY2tncm91bmQ6ICMwMEZGRkY7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOjkwJTtcbiAgICBtYXJnaW46YXV0bztcbiAgIFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xudmlzaWJpbGl0eTogaGlkZGVuO1xucGFkZGluZy10b3A6IDVweDtcbnBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbm5hdiB1bFxue1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbm5hdiB1bCBsaXtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgIFxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogLTE1cHggNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4uY2hlY2tidG57XG4gICAgZm9udC1zaXplOjMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjaGVja3tcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4udXNlci1wXG57XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9iamVjdC1maXQ6Y292ZXI7XG4gICBvYmplY3QtcG9zaXRpb246NTAlIDUwJTtcbiAgIGhlaWdodDogMjAwcHg7XG4gICB3aWR0aDogMjAwcHg7XG4gICBpbWFnZS1yZW5kZXJpbmc6IGhpZ2gtcXVhbGl0eTtcbiAgIGZsb2F0OiBsZWZ0O1xuICAgXG59XG51e1xudGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBvcmFuZ2U7XG59XG4vKi5lbWFpbFxue1xuICAgIFxuICAgIHBhZGRpbmctbGVmdDogMTUwcHg7XG59Ki9cbi5mYS1lbnZlbG9wZVxue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbn1cbi5lZGl0XG57XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIFxuICAgIFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuXG5cbn1cbi5sb2dvdXRcbntcbiAgICBib3JkZXI6bm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjRkY2MzQ3O1xufVxuLyojbmFtZVxue1xuICAgIFxuICAgIFxufSovXG5cbi5oZXlcbntcbiAgICB3aWR0aDo1MCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgXG59XG4uZm9ybVxue1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIFxuICAgIFxuICAgIFxufVxuLmZvcm0gaW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiBkZWVwcGluaztcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBcbn1cbi5mb3JtIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOjBweDtcbiAgICBsZWZ0OiAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOmRlZXBwaW5rO1xuICAgIFxufVxuLypib2R5e1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblxuXG59Ki9cbi5mb3JtIGxhYmVsOjphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDo1MCU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibHVlO1xuICAgICBsZWZ0OiAwcHg7XG4gICAgIGJvdHRvbTogLTFweDtcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgdHJhbnNpdGlvbjogdHJhbnNmb20gMC4zcyBlYXNlO1xufVxuLmNvbnRlbnQtbmFtZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOjVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG59LmNvbnRlbnQtbmFtZXp6XG57XG5jb2xvcjogZ29sZGVucm9kO1xuZm9udC1zaXplOiAxNHB4O1xucGFkZGluZy10b3A6IDVweDtcbn1cblxuLmZvcm0gaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZSAuY29udGVudC1uYW1lLFxuLmZvcm0gaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZSAuY29udGVudC1uYW1lLFxuLmZvcm0gaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZSAuY29udGVudC1uYW1lXG57XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IGdvbGRlbnJvZDtcbiAgICBcbiAgICBcblxufVxuLmZvcm0gaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZTo6YWZ0ZXIsXG4uZm9ybSBpbnB1dDp2YWxpZCArIC5sYWJlbC1uYW1lOjphZnRlcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuLmZvcm1hXG57XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICBcbn1cbi5mb3JtYSBpbnB1dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IGRlZXBwaW5rO1xufVxuLmZvcm1hIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOjBweDtcbiAgICBsZWZ0OiAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOiBkZWVwcGluaztcbiAgICBcbn1cbi8qYm9keXtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cblxufSovXG4uZm9ybWEgbGFiZWw6OmFmdGVye1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibHVlO1xuICAgICBsZWZ0OiAwcHg7XG4gICAgIGJvdHRvbTogLTFweDtcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgdHJhbnNpdGlvbjogdHJhbnNmb20gMC4zcyBlYXNlO1xuICAgIFxufVxuLmNvbnRlbnQtbmFtZWF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTo1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgXG59XG4uY29udGVudC1uYW1lYXpcbntcbiAgICBjb2xvcjogZ29sZGVucm9kO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb3JtYSBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYSAuY29udGVudC1uYW1lYSxcbi5mb3JtYSBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYSAuY29udGVudC1uYW1lYSxcbi5mb3JtYSBpbnB1dDp2YWxpZCArIC5sYWJlbC1uYW1lYSAuY29udGVudC1uYW1lYVxue1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XG5cbn1cbi5mb3JtYSBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYTo6YWZ0ZXIsXG4uZm9ybWEgaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZWE6OmFmdGVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG59XG5cbi5mb3JtYlxue1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmZvcm1iIGlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogZGVlcHBpbms7XG59XG4uZm9ybWIgbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206MHB4O1xuICAgIGxlZnQ6IDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgY29sb3I6IGRlZXBwaW5rO1xufVxuLypib2R5e1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblxuXG59Ki9cbi5mb3JtYiBsYWJlbDo6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XG4gICAgIGxlZnQ6IDBweDtcbiAgICAgYm90dG9tOiAtMXB4O1xuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICB0cmFuc2l0aW9uOiB0cmFuc2ZvbSAwLjNzIGVhc2U7XG59XG4uY29udGVudC1uYW1lYntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOjVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG59XG4uZm9ybWIgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWIgLmNvbnRlbnQtbmFtZWIsXG4uZm9ybWIgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWIgLmNvbnRlbnQtbmFtZWIsXG4uZm9ybWIgaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZWIgLmNvbnRlbnQtbmFtZWJcbntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogZ29sZGVucm9kO1xuXG59XG4uZm9ybWIgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWI6OmFmdGVyLFxuLmZvcm1iIGlucHV0OnZhbGlkICsgLmxhYmVsLW5hbWViOjphZnRlcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuLmZvcm1jXG57XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uZm9ybWMgaW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBkZWVwcGluaztcbn1cbi5mb3JtYyBsYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTowcHg7XG4gICAgbGVmdDogMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBjb2xvcjogZGVlcHBpbms7XG59XG4vKmJvZHl7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXG5cbn0qL1xuLmZvcm1jIGxhYmVsOjphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmx1ZTtcbiAgICAgbGVmdDogMHB4O1xuICAgICBib3R0b206IC0xcHg7XG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgIHRyYW5zaXRpb246IHRyYW5zZm9tIDAuM3MgZWFzZTtcbn1cbi5jb250ZW50LW5hbWVje1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206NXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbn1cbi5mb3JtYyBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYyAuY29udGVudC1uYW1lYyxcbi5mb3JtYyBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYyAuY29udGVudC1uYW1lYyxcbi5mb3JtYyBpbnB1dDp2YWxpZCArIC5sYWJlbC1uYW1lYyAuY29udGVudC1uYW1lY1xue1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XG5cbn1cbi5mb3JtYyBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYzo6YWZ0ZXIsXG4uZm9ybWMgaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZWM6OmFmdGVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG59XG4uZWRpdC1pbmZvXG57XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmVtYWlsXG57XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZsb2F0OnJpZ2h0O1xufVxuLmxvZ291dDpob3ZlciB7XG4gICAgY29sb3I6ICM5MDUwQUE7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I0ZGNjM0NztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICAuYnNldFxuICB7XG5vcGFjaXR5OiAwLjg7XG5oZWlnaHQ6IDIwMHZoO1xuYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIH1cbi5jYXJkLWJvZHlcbntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OjVweDtcbiAgfVxuICBcbiAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xuICAgIG1hcmdpbjogNnB4IDA7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgfVxuICBcbiAgLmNoYW5nZSAuYmFyMSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XG4gIH1cbiAgXG4gIC5jaGFuZ2UgLmJhcjIge29wYWNpdHk6IDA7fVxuICBcbiAgLmNoYW5nZSAuYmFyMyB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XG4gIH1cbiAgLmRhc2hpXG4gIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgLypwYWRkaW5nLXJpZ2h0OiA1MHB4OyovXG4gICAgICBcbiAgICAgIHdpZHRoOjUyMHB4O1xuICB9XG4gIC52bCB7XG4gICAgICBcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG4gICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgZmxvYXQ6bGVmdDtcbiAgfVxuICAvKi5jYXJyeW1pbmF0aVxuICB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgfSovXG4gIFxuLmNvbC1zbS0uY29sLXNtLW9mZnNldC0zXG57XG5mbG9hdDogbGVmdDtcbn1cblxuXG4gIFxuICAuc2V0dGluZ1xue1xuICAgIGhlaWdodDogMTAwMHB4O1xufVxuLmltZ2dnZ1xue1xuICBvcGFjaXR5OjAuODtcbiAgd2lkdGg6IDgwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG4ubWVyZ2VcbntcbiAgXG4gICAgYm9yZGVyLWJvdHRvbTogY3lhbjtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICB3aWR0aDo4MDBweDtcbiAgICBcbn1cbi53cmFwcGVyaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBlcnNwZWN0aXZlOiA0MGVtO1xuICAgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTUwcHg7XG4gICAgcGFkZGluZy10b3A6IDIyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICAgXG4gICAgXG4gICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MzQ3OyovXG4gIH1cbiAgXG4gIC5jYXJkIHtcbiAgICBncmlkLWFyZWE6IDEgLyAxO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KSByb3RhdGVZKDI1ZGVnKSByb3RhdGVYKDEwZGVnKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTk4LCAyNiwgMC44OCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKnBhZGRpbmc6IDMwcHg7Ki9cbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtM3B4IHJnYmEoMCwwLDAsLjEpO1xuICB9XG4gIFxuICBoNCB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbiAgXG4gIC5jYXJkIC5lbmNsb3NlZCB7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogcmdiYSgyNDksIDE5OCwgMjYsIDEpO1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAxcHgpIHNjYWxlKDAuNzUpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcbiAgfVxuICBcbiAgLndyYXBwZXJpOmJlZm9yZSB7XG4gICAgLS1idzogOXB4O1xuICAgIGdyaWQtYXJlYTogMSAvIDE7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tYncpKTtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLWJ3KSk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02MHB4KSByb3RhdGVZKC0zMGRlZykgcm90YXRlWCgxNWRlZykgc2NhbGUoMS4wMyk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyOiB2YXIoLS1idykgc29saWQgIzAwMDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgfVxuICBcbiAgXG4gIC53cmFwcGVyaTpob3ZlciA+IGRpdixcbiAgLndyYXBwZXJpOmhvdmVyOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIFxuICBcbiAgLndyYXBwZXJpID4gZGl2LFxuICAud3JhcHBlcmk6YmVmb3JlIHtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb246IC4zcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LDEpO1xuICB9XG4gIC53cmFwcGVyMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBlcnNwZWN0aXZlOiA0MGVtO1xuICAgZmxvYXQ6bGVmdDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbiAgICBcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNGRjYzNDc7Ki9cbiAgfVxuICBcbiAgLmNhcmQyIHtcbiAgICBncmlkLWFyZWE6IDEgLyAxO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpIHJvdGF0ZVkoMjVkZWcpIHJvdGF0ZVgoMTBkZWcpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxOTgsIDI2LCAwLjg4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qcGFkZGluZzogMzBweDsqL1xuICAgIFxuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0zcHggcmdiYSgwLDAsMCwuMSk7XG4gIH1cbiAgXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICBcbiAgLmNhcmQyIC5lbmNsb3NlZDIge1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6IHJnYmEoMjQ5LCAxOTgsIDI2LCAxKTtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMXB4KSBzY2FsZSgwLjc1KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XG4gIH1cbiAgXG4gIC53cmFwcGVyMjpiZWZvcmUge1xuICAgIC0tYnc6IDlweDtcbiAgICBncmlkLWFyZWE6IDEgLyAxO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLWJ3KSk7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1idykpO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNjBweCkgcm90YXRlWSgtMzBkZWcpIHJvdGF0ZVgoMTVkZWcpIHNjYWxlKDEuMDMpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlcjogdmFyKC0tYncpIHNvbGlkICMwMDA7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIH1cbiAgXG4gIFxuICAud3JhcHBlcjI6aG92ZXIgPiBkaXYsXG4gIC53cmFwcGVyMjpob3ZlcjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICBcbiAgXG4gIC53cmFwcGVyMiA+IGRpdixcbiAgLndyYXBwZXIyOmJlZm9yZSB7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwxKTtcbiAgfVxuICAuY2FwdGlvblxuICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGhlaWdodDoxMDBweDtcbiAgfVxuLnRyeWluZ1xue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOjEyMDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICBcbn1cbi5jYXJvdXNlbGt7XG4gICAgXG4gICAgd2lkdGg6ODAwcHg7XG4gICAgXG4gICAgXG4gICBmbG9hdDogbGVmdDtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJvdXNlbGtrXG57XG4gICAgXG4gICAgXG4gICAgd2lkdGg6ODAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5jb2wtc20tIGNvbC1zbS1vZmZzZXQtM1xue1xuZmxvYXQ6IGxlZnQ7XG59XG4uaDFjbGFzc1xue1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmgzY2xhc3NcbntcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4udGVjaCBcbntcbiAgICBmb250LXNpemU6IDcwcHg7XG59XG4jY2hvb3NlLWZpbGVcbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4jY2hvc2Vuelxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICBcbn1cbiNidXR1IFxue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainpage/mainpage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/mainpage/mainpage.component.ts ***!
    \************************************************/

  /*! exports provided: MainpageComponent */

  /***/
  function srcAppMainpageMainpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainpageComponent", function () {
      return MainpageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainpageComponent = /*#__PURE__*/function () {
      function MainpageComponent() {
        _classCallCheck(this, MainpageComponent);
      }

      _createClass(MainpageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainpageComponent;
    }();

    MainpageComponent.ɵfac = function MainpageComponent_Factory(t) {
      return new (t || MainpageComponent)();
    };

    MainpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainpageComponent,
      selectors: [["app-mainpage"]],
      decls: 0,
      vars: 0,
      template: function MainpageComponent_Template(rf, ctx) {},
      styles: [".landing[_ngcontent-%COMP%]{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    \n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZOzs7O0FBSWhCIiwiZmlsZSI6InNyYy9hcHAvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kaW5ne1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBcblxuXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mainpage',
          templateUrl: './mainpage.component.html',
          styleUrls: ['./mainpage.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-ui.module.ts":
  /*!***************************************!*\
    !*** ./src/app/material-ui.module.ts ***!
    \***************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialUiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");

    var MaterialModule = /*#__PURE__*/function () {
      function MaterialModule(matIconRegistry) {
        _classCallCheck(this, MaterialModule);

        this.matIconRegistry = matIconRegistry; // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
      }

      _createClass(MaterialModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: MaterialModule,
            providers: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]]
          };
        }
      }]);

      return MaterialModule;
    }();

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]));
      },
      providers: [],
      imports: [[_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]],
        exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]],
          exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]],
          providers: []
        }]
      }], function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 50,
      vars: 0,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet"], [1, "logo"], ["src", "assets/1.gif", 1, "w-50"], ["button", "", "routerLink", "/exam"], [1, "fa", "fa-pencil", "fa-fw"], ["button", "", "routerLink", "/notification"], [1, "fa", "fa-bell"], ["button", "", "routerLink", "/login", 1, "active"], [1, "fa", "fa-fw", "fa-user"], [1, "menu-toggle"], ["aria-hidden", "true", 1, "fa", "fa-bars"], ["src", "assets/bg.png", "alt", "Responsive image", 1, "img-fluid", "landing"], ["id", "contact", 1, "sm-padding", 2, "background-color", "black"], [1, "container"], [1, "row"], [1, "section-header", "text-center"], [1, "title", "white-text"], [1, "col-md-12"], [1, "footer-logo"], ["href", "#"], ["src", "/assets/era.png", "alt", "logo"], [1, "footer-follow", 2, "font-size", "48px"], ["href", "https://www.facebook.com/eraiitkanpur/", "target", "_blank"], [1, "fa", "fa-facebook"], ["href", "https://www.github.com/ERA-IITK", "target", "_blank"], [1, "fa", "fa-github"], ["href", "mailto:eraiitk@gmail.com"], [1, "fa", "fa-envelope"], ["href", "https://www.linkedin.com/company/era-iitk/", "target", "_blank"], ["target", "_blank", 1, "fa", "fa-linkedin"], ["href", "https://www.youtube.com/channel/UCaaEga5jSCEN6ph6w9E9TVQ"], ["target", "_blank", 1, "fa", "fa-youtube"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NavBar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Exam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "footer", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["body[_ngcontent-%COMP%]{\n    margin:0;\n    padding:0;\n    font-family: sans-serif;\n}\nheader[_ngcontent-%COMP%]{\n    position: absolute;\n    top:0;\n    left:0;\n    padding: 0 ;\n    background:black;\n    -webkit-text-decoration: white;\n            text-decoration: white;\n    width: 100%;\n    box-sizing: border-box;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\n    float: left;\n    \n    line-height: 50px;\n    \n    height:100%;\n \n\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\n    float: right;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin:0;\n    padding: 0;\n    display: flex;\n    margin: auto;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    list-style: none;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color: #fff;\n    background: grey;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    height: 50px;\n    line-height: 50px;\n    padding: 0 20px;\n    text-decoration: none;\n    display: block;\n}\n.menu-toggle[_ngcontent-%COMP%]{\n    color: #fff;\n    float: right;\n    line-height: 50px;\n    font-size: 24px;\n    cursor: pointer;\n    display: none;\n}\n.landing[_ngcontent-%COMP%]{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    \n\n\n}\n.bg-dark[_ngcontent-%COMP%]{\n    background-color: #000;\n}\n.sm-padding[_ngcontent-%COMP%]{\n    padding-top: 60px ;\n    padding-bottom : 60px;\n}\n.container[_ngcontent-%COMP%]{\n    padding: 15px 0px;\n    margin-right:auto;\n    margin-left:auto;\n}\n.row[_ngcontent-%COMP%] {\n    margin-left: -15px;\n    margin-right: -15px;\n}\n.section-header[_ngcontent-%COMP%]{\n    position: relative;\n    margin-bottom: 60px;\n    \n}\n.text-center[_ngcontent-%COMP%]{\n    text-align: center;\n}\ndiv[_ngcontent-%COMP%] {\n    display: block;\n}\n.row[_ngcontent-%COMP%]:before {\n    \n    content: \" \";\n}\n[_ngcontent-%COMP%]:before {\n    box-sizing: border-box;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n    background-color: #6195FF;\n    color: #FFF;\n}\n[_ngcontent-%COMP%]::selection {\n    background-color: #6195FF;\n    color: #FFF;\n}\n.section-header[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 60px;\n}\n.text-center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n.white-text[_ngcontent-%COMP%] {\n    color: #FFF;\n}\nh2[_ngcontent-%COMP%] {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 700;\n    margin-top: 0px;\n    margin-bottom: 20px;\n}\n.title[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: block;\n    height: 4px;\n    width: 40px;\n    background-color: #6195FF;\n   \n}\n.text-center[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:after {\n    margin: 20px auto 0px;\n}\n.col-md-12[_ngcontent-%COMP%]{\n    position: relative;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n}\n.footer-logo[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 40px;\n}\n.footer-follow[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 20px;\n}\n.footer-follow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 72px;\n    height: 72px;\n    line-height: 80px;\n    text-align: center;\n    border-radius: 3px;\n    \n    \n    transition: all 0.4s;\n}\na[_ngcontent-%COMP%] {\n    background-color: transparent;\n}\n[_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before {\n    \n    box-sizing: border-box;\n}\nul[_ngcontent-%COMP%] {\n    \n        margin: 0;\n        padding: 0;\n        list-style: none;\n    \n    display: block;\n    \n    -webkit-margin-before: 1em;\n    \n            margin-block-start: 1em;\n    -webkit-margin-after: 1em;\n            margin-block-end: 1em;\n    -webkit-margin-start: 0px;\n            margin-inline-start: 0px;\n    -webkit-margin-end: 0px;\n            margin-inline-end: 0px;\n    -webkit-padding-start: 40px;\n            padding-inline-start: 40px;\n}\n.section-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-transform: capitalize;\n}\n@media (max-width: 991px)\n{\n    header[_ngcontent-%COMP%]\n    {\n        padding: 0 20px;\n    }\n    .menu-toggle[_ngcontent-%COMP%]\n    {\n        display: block;\n    }\n    header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\n        position: absolute;\n        width: 100%;\n        height: calc(100vh-50px);\n        background: #333;\n        top:50px;\n        left:0px;\n       transition: 0.5s;\n\n    }\n    header[_ngcontent-%COMP%]   nav.active[_ngcontent-%COMP%]{\n        left:0;\n    }\n    header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]\n    {\n        display: block;\n        text-align:center;\n        \n    };\n    header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\n    {\n        border-bottom: 1px solid rgba(0,0,0,.2);\n    }\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLE1BQU07SUFDTixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVzs7SUFFWCxpQkFBaUI7O0lBRWpCLFdBQVc7OztBQUdmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxRQUFRO0lBQ1IsVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFHQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZOzs7O0FBSWhCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBSEE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCOztBQUU3QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCOzs7SUFHbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTs7SUFFSSxzQkFBc0I7QUFDMUI7QUFDQTs7UUFFUSxTQUFTO1FBQ1QsVUFBVTtRQUNWLGdCQUFnQjs7SUFFcEIsY0FBYzs7SUFFZCwwQkFBdUI7O1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLHlCQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsdUJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QiwyQkFBMEI7WUFBMUIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTs7SUFFSTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksY0FBYztJQUNsQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCx3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLFFBQVE7UUFDUixRQUFRO09BQ1QsZ0JBQWdCOztJQUVuQjtJQUNBO1FBQ0ksTUFBTTtJQUNWO0lBQ0E7O1FBRUksY0FBYztRQUNkLGlCQUFpQjs7SUFFckIsQ0FBQTtJQUNBOztRQUVJLHVDQUF1QztJQUMzQzs7O0FBR0oiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmJvZHl7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuaGVhZGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgcGFkZGluZzogMCA7XG4gICAgYmFja2dyb3VuZDpibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5oZWFkZXIgLmxvZ297XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgXG4gICAgaGVpZ2h0OjEwMCU7XG4gXG5cbn1cbmhlYWRlciBuYXZ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuaGVhZGVyIG5hdiB1bCB7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cbmhlYWRlciBuYXYgdWwgbGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuXG5oZWFkZXIgbmF2IHVsIGxpIGE6aG92ZXJ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogZ3JleTtcbn1cbmhlYWRlciBuYXYgdWwgbGkgYXtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4ubWVudS10b2dnbGV7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5sYW5kaW5ne1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBcblxuXG59XG4uYmctZGFya3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLnNtLXBhZGRpbmd7XG4gICAgcGFkZGluZy10b3A6IDYwcHggO1xuICAgIHBhZGRpbmctYm90dG9tIDogNjBweDtcbn1cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcbn1cbi5yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuLnNlY3Rpb24taGVhZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIFxufVxuLnRleHQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ucm93OmJlZm9yZSB7XG4gICAgXG4gICAgY29udGVudDogXCIgXCI7XG59XG46YmVmb3JlIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTk1RkY7XG4gICAgY29sb3I6ICNGRkY7XG59XG4uc2VjdGlvbi1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2hpdGUtdGV4dCB7XG4gICAgY29sb3I6ICNGRkY7XG59XG5oMiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpdGxlOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTk1RkY7XG4gICBcbn1cbi50ZXh0LWNlbnRlciAudGl0bGU6YWZ0ZXIge1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDBweDtcbn1cbi5jb2wtbWQtMTJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5mb290ZXItbG9nbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uZm9vdGVyLWZvbGxvdyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZm9vdGVyLWZvbGxvdyBsaSBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcycHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgXG4gICAgXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5hIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjphZnRlciwgOmJlZm9yZSB7XG4gICAgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbnVsIHtcbiAgICBcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDBweDtcbn1cbi5zZWN0aW9uLWhlYWRlciAudGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpXG57XG4gICAgaGVhZGVyXG4gICAge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgfVxuICAgIC5tZW51LXRvZ2dsZVxuICAgIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIGhlYWRlciBuYXZ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aC01MHB4KTtcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMztcbiAgICAgICAgdG9wOjUwcHg7XG4gICAgICAgIGxlZnQ6MHB4O1xuICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG5cbiAgICB9XG4gICAgaGVhZGVyIG5hdi5hY3RpdmV7XG4gICAgICAgIGxlZnQ6MDtcbiAgICB9XG4gICAgaGVhZGVyIG5hdiB1bFxuICAgIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBcbiAgICB9O1xuICAgIGhlYWRlciBuYXYgdWwgbGkgYVxuICAgIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjIpO1xuICAgIH1cblxuXG59XG5cbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //import {FirebaseProvider} from 'angular-firebase';
    //var firebase = require('firebase');


    var AuthService = /*#__PURE__*/function () {
      function AuthService(afStorage, auth, afs, router) {
        var _this6 = this;

        _classCallCheck(this, AuthService);

        this.afStorage = afStorage;
        this.auth = auth;
        this.afs = afs;
        this.router = router;
        this.user$ = this.auth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
          // Logged in
          if (user) {
            return _this6.afs.doc("users/".concat(user.uid)).valueChanges();
          } else {
            // Logged out
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
          }
        }));
      }

      _createClass(AuthService, [{
        key: "googleSignin",
        value: function googleSignin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var provider, credential, str, pad, ans;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
                    _context.next = 3;
                    return this.auth.signInWithPopup(provider);

                  case 3:
                    credential = _context.sent;
                    str = "" + 1;
                    pad = "00000";
                    ans = pad.substring(0, pad.length - str.length) + str;
                    ans = parseInt(ans) + 1 + ""; //user.sendEmailVerification().then(function() {
                    // Email sent.
                    //}).catch(function(error) {
                    // An error happened.
                    //});
                    //this.router.navigate['/dashboard'];

                    return _context.abrupt("return", this.updateUserData(credential.user));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "faceSignin",
        value: function faceSignin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var provider, credential;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
                    _context2.next = 3;
                    return this.auth.signInWithPopup(provider);

                  case 3:
                    credential = _context2.sent;
                    return _context2.abrupt("return", this.updateUserData(credential.user));

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } //async sendEmailVerification() {
        //this.router.navigate(['admin/verify-email']);
        //}

      }, {
        key: "updateUserData",
        value: function updateUserData(user) {
          // Sets user data to firestore on login
          var userRef = this.afs.doc("users/".concat(user.uid));
          var check = "1";
          var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          };
          this.updateu = Object.assign({}, data);
          this.updatec = data;
          console.log(this.updateu.displayName);
          return userRef.set(data, {
            merge: true
          }); //ans = parseInt(ans)+1 + "";
        }
      }, {
        key: "signOut",
        value: function signOut() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.auth.signOut();

                  case 2:
                    this.router.navigate(['/']);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "lete",
        value: function lete() {
          delete this.updateu.displayName;
          this.updateu.displayName = "harsh";
          this.updatec = this.updateu;
          this.afs.doc('users/' + this.updateu.uid).update(this.updatec); //console.log(this.updatec.displayName)
        }
      }, {
        key: "uploadreq",
        value: function uploadreq() {
          // const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
          var update = {
            displayName: document.getElementById("i-name").nodeValue,
            collegeName: document.getElementById("i-clgname").nodeValue
          };
          return this.upload(update);
        }
      }, {
        key: "upload",
        value: function upload(updatei) {
          /*this.auth.currentUser.then(function(successMessage) {
           //success handler function is invoked
           
            console.log(successMessage);
          }, function(errorMessage) {
            console.log(errorMessage);
          }) */
          // this.auth.updateCurrentUser()
          //var user = firebase.auth().currentUser;

          /*const id  = Math.random().toString(36).substring(2);
          this.ref = this.afStorage.ref(id);
          this.task = this.ref.put(event.target.files[0]);
          this.uploadProgress = this.task.percentageChanges();
          //this.downloadURL = this.task.getDownloadURL();
          this.task.snapshotChanges().pipe(
            finalize(() => this.downloadURL = this.ref.getDownloadURL() ))
          .subscribe();
          //console.log(this.updatec.displayName)*/
          //this.db.collection("users"),get

          /* dialogRef.afterClosed().subscribe(result => {
             if(result){
               this.item.avatar = result.link;
             }
           });*/
          //var user = firebase.auth().currentUser;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignupComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function SignupComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "To Continue ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_ng_template_11_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.auth.faceSignin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Login through Facebook ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_ng_template_11_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.auth.googleSignin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login With Google");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Don't have an account?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "SIGN UP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "footer", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_ng_template_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_ng_template_13_div_1_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.myFunction();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " HOME ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ABOUT ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " SERVICES ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " CONTACT ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " MORE ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_ng_template_13_div_1_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.onClickMe();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_ng_template_13_div_1_Template_button_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.auth.signOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r11 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", user_r11.displayName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r11.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("UID: ", user_r11.uid, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r11.email);
      }
    }

    function SignupComponent_ng_template_13_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_ng_template_13_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r10.downloadURL), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0() {
      return {
        backgroundImage: "url(./assets/dashboard-bg.jpg)"
      };
    };

    function SignupComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_ng_template_13_div_1_Template, 42, 4, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignupComponent_ng_template_13_div_8_Template, 5, 0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "College Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "College City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SignupComponent_ng_template_13_div_27_Template, 3, 3, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "- ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_ng_template_13_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.ch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "p", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r4.auth.user$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx_r4.auth.user$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 9, ctx_r4.downloadURL));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.kMessage, " ");
      }
    } //import {FirebaseProvider} from 'angular-firebase';
    //import { userInfo } from 'os';
    //import { userInfo } from 'os';
    //import {AuthService} from './services/auth.service';
    //import { userInfo } from 'os';


    ; //import { User } from './user.model';

    var SignupComponent = /*#__PURE__*/function () {
      //console.log(this.user.photoURL)
      function SignupComponent(firestore, auth, afStorage, afs, router) {
        _classCallCheck(this, SignupComponent);

        this.firestore = firestore;
        this.auth = auth;
        this.afStorage = afStorage;
        this.afs = afs;
        this.router = router;
        this.title = 'firebase1';
        this.i = 1;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
        this.clickMessage = '';
        this.kMessage = '';
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "check",
        value: function check() {
          var user = firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
          var photu = user.photoURL;
          console.log(photu);
        }
      }, {
        key: "onClickMe",
        value: function onClickMe() {
          //this.clickMessage = 'You are my hero!';
          document.getElementById("user-name").style.visibility = "visible";
          document.getElementById("user-email").style.visibility = "visible";
          document.getElementById("clg-name").style.visibility = "visible";
          document.getElementById("clg-city").style.visibility = "visible";
          document.getElementById("choose-file").style.visibility = "visible"; //(change)="auth.upload($event)"
        }
      }, {
        key: "ch",
        value: function ch() {
          /*this.fb.getDataArr('users','value',{limitToFirst:2}).then((v)=>{
            console.log(v)
            
          });*/
          //console.log(value);
          //console.log(c);
          //let c:string = value;
          //console.log(value.type)
          //var value = document.getElementById("txtt")
          var user = firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
          var nameu = document.getElementById("namet").value;
          var emailu = document.getElementById("emailt").value;
          var photou = document.getElementById("choose-file").value;
          var clgnameu = document.getElementById("clg-namet").value;
          var clgcityu = document.getElementById("clg-cityt").value;
          var save = user.uid;
          console.log("users/" + save);

          if (clgnameu) {
            var docref = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().doc("users/" + save);
            docref.update({
              CollegeName: clgnameu
            }).then(function () {
              console.log("success");
            })["catch"](function (error) {
              console.log("error", error);
            });
          }

          if (clgcityu) {
            var docref = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().doc("users/" + save);
            docref.update({
              CollegeCity: clgcityu
            }).then(function () {
              console.log("success");
            })["catch"](function (error) {
              console.log("error", error);
            });
          } //console.log(docref)


          console.log(clgnameu);

          if (nameu && photou) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              user.updateProfile({
                displayName: nameu,
                photoURL: photou //photoURL: unit1

              });

              if (user) {
                console.log(user);
              } else {}
            });
          } else if (nameu && !photou) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              user.updateProfile({
                displayName: nameu,
                photoURL: user.photoURL //photoURL: unit1

              });

              if (user) {
                console.log(user);
              } else {}
            });
          } else if (!nameu && photou) {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              user.updateProfile({
                displayName: user.displayName,
                photoURL: photou //photoURL: unit1

              });

              if (user) {
                console.log(user);
              } else {}
            });
          } else {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              user.updateProfile({
                displayName: user.displayName,
                photoURL: user.photoURL //photoURL: unit1

              });

              if (user) {
                console.log(user);
              } else {}
            });
          } //console.log()

          /*if(emailu)
          {
          firebase.auth().onAuthStateChanged(function (user) {
                    user.updateEmail(emailu).then(function() {
              // Update successful.
            }).catch(function(error) {
              // An error happened.
              console.log(error)
            });
            });
          }
          var save  = user.uid;
          var docref = firebase.firestore().doc("users/"+ save);
          if(clgnameu)
          {
          docref.set(
            {
          CollegeName: clgnameu
            }
          )
          
          console.log(clgnameu)
          }*/

        }
      }, {
        key: "myFunction",
        value: function myFunction() {
          var check = document.getElementById("navi").style.visibility;
          document.getElementById("togbutton").classList.toggle("change");
          if (this.i % 2) document.getElementById("navi").style.visibility = "visible";
          if (this.i % 2 == 0) document.getElementById("navi").style.visibility = "hidden";
          this.i++;
          console.log(this.i % 2);
        }
      }, {
        key: "hoja",
        value: function hoja() {
          firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
            // User is signed in.
            if (user) {
              console.log('HELLO BOY');
              this.router.navigate('./../dashboard');
            } else {
              console.log('NO HELLO BOY');
            } //this.router.navigateByUrl('../dashboard');
            // No user is signed in.

          }); //console.log("hello bou");
        }
      }, {
        key: "navbar",
        value: function navbar() {
          document.getElementById("navi").style.visibility = "visible";
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 15,
      vars: 5,
      consts: [["charset", "utf-8"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "https://accounts.scdn.co/css/index.48778854b2fbc42ce2ee.css", "media", "screen", "rel", "stylesheet"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["guest", ""], ["authenticated", ""], [1, "Login"], [1, "w3-center", "w3-black"], ["src", "assets/1.PNG", 2, "max-height", "150px", "align", "middle"], [1, "w3-center"], [1, "w3-container", "w3-center"], [1, "btn", "btn-block", "btn-facebook", "facebook", 2, "font-size", "14px", "text-align", "center", "background-color", "#3b5998", "color", "#fff", 3, "click"], [1, "btn", "btn-block", "btn-google", "google", 2, "font-size", "14px", "text-align", "center", "background-color", "#000", "color", "#fff", 3, "click"], [1, "col-xs-12", "row"], [1, "divider", 2, "margin", "7px 239px", "padding", "14px 14px 18px"], [1, "text-center", "mt-0"], [1, "h4", "ng-binding"], ["type", "submit", "name", "signup", "value", "signup", 1, "btn", "btn-block", "btn-signup", 2, "font-size", "14px"], ["id", "contact", 1, "sm-padding", 2, "background-color", "black"], [1, "container"], [1, "row"], [1, "section-header", "text-center"], [1, "title", 2, "color", "white", "font-size", "235%", "margin", "center", "display", "block"], [1, "col-md-12"], [1, "footer-logo"], ["href", "#"], ["src", "/assets/era.png", "alt", "logo", 2, "margin", "auto", "display", "block"], [1, "footer-follow", 2, "font-size", "48px", "display", "block", "margin", "auto"], ["href", "https://www.facebook.com/eraiitkanpur/", "target", "_blank", "wrc_done", "true"], [1, "fa", "fa-facebook"], ["href", "https://www.github.com/ERA-IITK", "target", "_blank"], [1, "fa", "fa-github"], ["href", "mailto:eraiitk@gmail.com"], [1, "fa", "fa-envelope"], ["href", "https://www.linkedin.com/company/era-iitk/", "target", "_blank"], ["target", "_blank", 1, "fa", "fa-linkedin"], ["href", "https://www.youtube.com/channel/UCaaEga5jSCEN6ph6w9E9TVQ", "wrc_done", "true"], ["target", "_blank", 1, "fa", "fa-youtube"], [1, "bset", 3, "ngStyle"], [4, "ngIf"], [1, "hey"], ["class", "form", "id", "user-name", 4, "ngIf"], ["id", "user-email", 1, "forma"], ["id", "emailt", "type", "text", "autocomplete", "off", "name", "namea", "required", ""], ["for", "namea", 1, "label-namea"], [1, "content-namea"], ["id", "clg-name", 1, "formb"], ["id", "clg-namet", "type", "text", "autocomplete", "off", "name", "nameb", "required", ""], ["for", "nameb", 1, "label-nameb"], ["id", "i-clgname", 1, "content-nameb"], ["id", "clg-city", 1, "formc"], ["id", "clg-cityt", "type", "text", "autocomplete", "off", "name", "namec", "required", ""], ["for", "namec", 1, "label-namec"], [1, "content-namec"], ["id", "choose-file", 1, "card-body"], ["type", "file", "id", "chosen", "accept", ".png,.jpg", "namr", "fileu"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], [3, "click"], ["id", "demo"], ["id", "togbutton", 1, "container", 3, "click"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["id", "navi"], [2, "color", "#fff"], [2, "color", "whitesmoke"], [1, "user-p", 3, "src"], [1, "fa", "fa-envelope", 2, "font-size", "24px", "color", "whitesmoke"], [1, "email"], [1, "edit", 3, "click"], [1, "logout", 3, "click"], ["id", "user-name", 1, "form"], ["id", "namet", "type", "text", "autocomplete", "off", "name", "name", "required", ""], ["for", "name", 1, "label-name"], ["id", "i-name", 1, "content-name"], ["role", "alert", 1, "alert", "alert-info"], [3, "src"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignupComponent_div_9_Template, 1, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignupComponent_ng_template_11_Template, 47, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_ng_template_13_Template, 34, 12, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, ctx.auth.user$))("ngIfThen", _r3)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".btn[_ngcontent-%COMP%] {\r\n    padding: 16px 14px 18px;\r\n}\r\n.btn-facebook[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    background-color: #3b5998\r\n}\r\n.btn-block[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 30%;\r\n    margin:auto;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    line-height: 1;\r\n    border-radius: 500px;\r\n    \r\n    \r\n    \r\n    border-width: 0;\r\n    letter-spacing: 2px;\r\n    min-width: 160px;\r\n    text-transform: uppercase;\r\n    white-space: normal;\r\n}\r\n.btn-facebook[_ngcontent-%COMP%] {\r\n    padding-top: 14px;\r\n}\r\n.btn-facebook[_ngcontent-%COMP%]:hover{\r\n    background-color: cornsilk;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: circular-spotify-ui,Helvetica Neue,Helvetica,Arial,sans-serif;\r\n}\r\n.btn[_ngcontent-%COMP%]  {\r\n    \r\n    margin-bottom: 0;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n   \r\n    cursor: pointer;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    vertical-align: middle;\r\n    border:0;\r\n    \r\n}\r\n.bg-dark[_ngcontent-%COMP%]{\r\n    background-color: #000;\r\n}\r\n.sm-padding[_ngcontent-%COMP%]{\r\n    padding-top: 60px ;\r\n    padding-bottom : 60px;\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    padding: 15px 0px;\r\n    margin-right:auto;\r\n    margin-left:auto;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n    margin-left: -15px;\r\n    margin-right: -15px;\r\n}\r\n.section-header[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin-bottom: 60px;\r\n    \r\n}\r\n.text-center[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\ndiv[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.row[_ngcontent-%COMP%]:before {\r\n    \r\n    content: \" \";\r\n}\r\n[_ngcontent-%COMP%]:before {\r\n    box-sizing: border-box;\r\n}\r\n[_ngcontent-%COMP%]::-moz-selection {\r\n    background-color: #6195FF;\r\n    color: #FFF;\r\n}\r\n[_ngcontent-%COMP%]::selection {\r\n    background-color: #6195FF;\r\n    color: #FFF;\r\n}\r\n.section-header[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 60px;\r\n}\r\n.text-center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.white-text[_ngcontent-%COMP%] {\r\n    color: #FFF;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n    margin-top: 0px;\r\n    margin-bottom: 20px;\r\n}\r\n.title[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    display: block;\r\n    height: 4px;\r\n    width: 40px;\r\n    background-color: #6195FF;\r\n   \r\n}\r\n.text-center[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:after {\r\n    margin: 20px auto 0px;\r\n}\r\n.col-md-12[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    min-height: 1px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n}\r\n.footer-logo[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n.footer-follow[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n.footer-follow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 72px;\r\n    height: 72px;\r\n    line-height: 80px;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    \r\n    \r\n    transition: all 0.4s;\r\n}\r\na[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n}\r\n[_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before {\r\n    \r\n    box-sizing: border-box;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n    \r\n     margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    \r\n    display: block;\r\n    \r\n    -webkit-margin-before: 1em;\r\n    \r\n            margin-block-start: 1em;\r\n    -webkit-margin-after: 1em;\r\n            margin-block-end: 1em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    -webkit-padding-start: 40px;\r\n            padding-inline-start: 40px;\r\n}\r\n.section-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    text-transform: capitalize;\r\n}\r\n@media only screen and (max-width: 767px){\r\n.section-header[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\r\n    font-size: 31.5px;\r\n}\r\n}\r\n@media (min-width: 350px){\r\n .btn-facebook[_ngcontent-%COMP%] {\r\n    padding-top: 14px;\r\n}\r\n}\r\n@media (min-width: 350px){\r\n.btn[_ngcontent-%COMP%]{\r\n    font-size: 9px;\r\n    line-height: 1;\r\n    border-radius: 500px;\r\n}\r\n}\r\ndiv[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\r\n.col-xs-12[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    min-height: 1px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    float: left;\r\n}\r\n.divider[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #d9dadc;\r\n    display: block;\r\n    line-height: 1px;\r\n    margin: 15px 0;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n    margin-left: -15px;\r\n    margin-right: -15px;\r\n}\r\nnav[_ngcontent-%COMP%]{\r\n    background: #00FFFF;\r\n    height: 60px;\r\n    width:90%;\r\n   margin:  auto;\r\n   text-align: center;\r\nvisibility: hidden;\r\npadding-top: 5px;\r\n   \r\n    border-radius: 50px;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]\r\n{\r\n    padding-bottom: 20px;\r\n    margin-right: 20px;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display:inline-block;\r\n   \r\n    line-height: 80px;\r\n    margin: -15px 50px;\r\n    padding-bottom: 20px;\r\n    font-size: 25px;\r\n}\r\n.checkbtn[_ngcontent-%COMP%]{\r\n    font-size:30px;\r\n    color: white;\r\n    float: left;\r\n    line-height: 80px;\r\n    margin-left: 10px;\r\n    \r\n    cursor: pointer;\r\n}\r\n#check[_ngcontent-%COMP%]{\r\n    display:none;\r\n}\r\n.user-p[_ngcontent-%COMP%]\r\n{\r\n    border-radius: 50%;\r\n    -o-object-fit:cover;\r\n       object-fit:cover;\r\n   -o-object-position:50% 50%;\r\n      object-position:50% 50%;\r\n   height: 200px;\r\n   width: 200px;\r\n   image-rendering: high-quality;\r\n   float: left;\r\n   \r\n}\r\nu[_ngcontent-%COMP%]{\r\n-webkit-text-decoration-color: orange;\r\n        text-decoration-color: orange;\r\n}\r\n\r\n.fa-envelope[_ngcontent-%COMP%]\r\n{\r\n    float: left;\r\n    padding-left: 50px;\r\n   padding-right: 10px;\r\n    padding-top: 7px;\r\n}\r\n.edit[_ngcontent-%COMP%]\r\n{\r\n    float: left;\r\n   padding-left: 15px;\r\n   padding-right: 15px;\r\n    \r\n    \r\n    margin-left: 50px;\r\n    background-color: black;\r\n    color: whitesmoke;\r\n\r\n\r\n}\r\n.logout[_ngcontent-%COMP%]\r\n{\r\n    border:none;\r\n    background: none;\r\n    color: #FF6347;\r\n}\r\n\r\n.hey[_ngcontent-%COMP%]\r\n{\r\n    width:50%;\r\n    height: 300px;\r\n    margin-left: 100px;\r\n    margin-top: 0px;\r\n    background-color: none;\r\n    \r\n}\r\n.form[_ngcontent-%COMP%]\r\n{\r\n    width: 50%;\r\n    height: 25%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    \r\n    \r\n    \r\n}\r\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-top: 20px;\r\n    border: none;\r\n    outline: none;\r\n    color: deeppink;\r\n    background: transparent;\r\n    \r\n}\r\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom:0px;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    border-bottom: 1px solid black;\r\n    color:deeppink;\r\n    \r\n}\r\n\r\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\r\n    content: \"\";\r\n    height:50%;\r\n    width:100%;\r\n    position: absolute;\r\n     border-bottom: 3px solid blue;\r\n     left: 0px;\r\n     bottom: -1px;\r\n     transform: translateX(-100%);\r\n     transition: transfom 0.3s ease;\r\n}\r\n.content-name[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom:5px;\r\n    transition: all 0.3s ease;\r\n\r\n}\r\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-name[_ngcontent-%COMP%]   .content-name[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-name[_ngcontent-%COMP%]   .content-name[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-name[_ngcontent-%COMP%]   .content-name[_ngcontent-%COMP%]\r\n{\r\n    transform: translateY(-150%);\r\n    font-size: 14px;\r\n    color: goldenrod;\r\n    \r\n    \r\n\r\n}\r\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-name[_ngcontent-%COMP%]::after, .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-name[_ngcontent-%COMP%]::after{\r\n    transform: translateX(0%);\r\n}\r\n.forma[_ngcontent-%COMP%]\r\n{\r\n    width: 50%;\r\n    height: 25%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n   \r\n}\r\n.forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-top: 20px;\r\n    border: none;\r\n    outline: none;\r\n    background: transparent;\r\n    color: deeppink;\r\n}\r\n.forma[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom:0px;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    border-bottom: 1px solid black;\r\n    color: deeppink;\r\n    \r\n}\r\n\r\n.forma[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\r\n    content: \"\";\r\n    height:100%;\r\n    width:100%;\r\n    position: absolute;\r\n     border-bottom: 3px solid blue;\r\n     left: 0px;\r\n     bottom: -1px;\r\n     transform: translateX(-100%);\r\n     transition: transfom 0.3s ease;\r\n    \r\n}\r\n.content-namea[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom:5px;\r\n    transition: all 0.3s ease;\r\n    border: none;\r\n    \r\n}\r\n.forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namea[_ngcontent-%COMP%]   .content-namea[_ngcontent-%COMP%], .forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namea[_ngcontent-%COMP%]   .content-namea[_ngcontent-%COMP%], .forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namea[_ngcontent-%COMP%]   .content-namea[_ngcontent-%COMP%]\r\n{\r\n    transform: translateY(-150%);\r\n    font-size: 14px;\r\n    color: goldenrod;\r\n\r\n}\r\n.forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namea[_ngcontent-%COMP%]::after, .forma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namea[_ngcontent-%COMP%]::after{\r\n    transform: translateX(0%);\r\n}\r\n.formb[_ngcontent-%COMP%]\r\n{\r\n    width: 50%;\r\n    height: 25%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n}\r\n.formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-top: 20px;\r\n    border: none;\r\n    outline: none;\r\n    background: transparent;\r\n    color: deeppink;\r\n}\r\n.formb[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom:0px;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    border-bottom: 1px solid black;\r\n    color: deeppink;\r\n}\r\n\r\n.formb[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\r\n    content: \"\";\r\n    height:100%;\r\n    width:100%;\r\n    position: absolute;\r\n     border-bottom: 3px solid blue;\r\n     left: 0px;\r\n     bottom: -1px;\r\n     transform: translateX(-100%);\r\n     transition: transfom 0.3s ease;\r\n}\r\n.content-nameb[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom:5px;\r\n    transition: all 0.3s ease;\r\n\r\n}\r\n.formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-nameb[_ngcontent-%COMP%]   .content-nameb[_ngcontent-%COMP%], .formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-nameb[_ngcontent-%COMP%]   .content-nameb[_ngcontent-%COMP%], .formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-nameb[_ngcontent-%COMP%]   .content-nameb[_ngcontent-%COMP%]\r\n{\r\n    transform: translateY(-150%);\r\n    font-size: 14px;\r\n    color: goldenrod;\r\n\r\n}\r\n.formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-nameb[_ngcontent-%COMP%]::after, .formb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-nameb[_ngcontent-%COMP%]::after{\r\n    transform: translateX(0%);\r\n}\r\n.formc[_ngcontent-%COMP%]\r\n{\r\n    width: 50%;\r\n    height: 25%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n}\r\n.formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-top: 20px;\r\n    border: none;\r\n    outline: none;\r\n    background: transparent;\r\n    color: deeppink;\r\n}\r\n.formc[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom:0px;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    border-bottom: 1px solid black;\r\n    color: deeppink;\r\n}\r\n\r\n.formc[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after{\r\n    content: \"\";\r\n    height:100%;\r\n    width:100%;\r\n    position: absolute;\r\n     border-bottom: 3px solid blue;\r\n     left: 0px;\r\n     bottom: -1px;\r\n     transform: translateX(-100%);\r\n     transition: transfom 0.3s ease;\r\n}\r\n.content-namec[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom:5px;\r\n    transition: all 0.3s ease;\r\n\r\n}\r\n.formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namec[_ngcontent-%COMP%]   .content-namec[_ngcontent-%COMP%], .formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namec[_ngcontent-%COMP%]   .content-namec[_ngcontent-%COMP%], .formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namec[_ngcontent-%COMP%]   .content-namec[_ngcontent-%COMP%]\r\n{\r\n    transform: translateY(-150%);\r\n    font-size: 14px;\r\n    color: goldenrod;\r\n\r\n}\r\n.formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .label-namec[_ngcontent-%COMP%]::after, .formc[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + .label-namec[_ngcontent-%COMP%]::after{\r\n    transform: translateX(0%);\r\n}\r\n.edit-info[_ngcontent-%COMP%]\r\n{\r\n    visibility: hidden;\r\n}\r\n.email[_ngcontent-%COMP%]\r\n{\r\n    color: whitesmoke;\r\n}\r\n.logout[_ngcontent-%COMP%]:hover {\r\n    color: #9050AA;\r\n        background-color:#FF6347;\r\n        border-radius: 15px;\r\n  }\r\n.bset[_ngcontent-%COMP%]\r\n  {\r\nopacity: 0.8;\r\n  }\r\n.card-body[_ngcontent-%COMP%]\r\n{\r\n    visibility: hidden;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    margin-left:5px;\r\n  }\r\n.bar1[_ngcontent-%COMP%], .bar2[_ngcontent-%COMP%], .bar3[_ngcontent-%COMP%] {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color:whitesmoke;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n  }\r\n.change[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\r\n    transform: rotate(-45deg) translate(-9px, 6px);\r\n  }\r\n.change[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {opacity: 0;}\r\n.change[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\r\n    transform: rotate(45deg) translate(-8px, -8px);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1g7QUFDSjtBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9COzs7O0lBSXBCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSwwRUFBMEU7QUFDOUU7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7O0lBRXRCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsUUFBUTs7QUFFWjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBOztJQUVJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUhBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7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NkJBQTZCO0tBQzdCLFNBQVM7S0FDVCxZQUFZO0tBQ1osNEJBQTRCO0tBQzVCLDhCQUE4QjtBQUNuQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5QkFBeUI7O0FBRTdCO0FBQ0E7Ozs7SUFJSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7UUFDVix3QkFBd0I7UUFDeEIsbUJBQW1CO0VBQ3pCO0FBQ0E7O0FBRUYsWUFBWTtFQUNWO0FBQ0Y7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFFQTtJQUVFLDhDQUE4QztFQUNoRDtBQUVBLGVBQWUsVUFBVSxDQUFDO0FBRTFCO0lBRUUsOENBQThDO0VBQ2hEIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDE0cHggMThweDtcclxufVxyXG4uYnRuLWZhY2Vib29re1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4XHJcbn1cclxuLmJ0bi1ibG9ja3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG59XHJcbi5idG57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcclxufVxyXG4uYnRuLWZhY2Vib29rOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybnNpbGs7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogY2lyY3VsYXItc3BvdGlmeS11aSxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxufVxyXG4uYnRuICB7XHJcbiAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW1ne1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgXHJcbn1cclxuLmJnLWRhcmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbi5zbS1wYWRkaW5ne1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHggO1xyXG4gICAgcGFkZGluZy1ib3R0b20gOiA2MHB4O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxufVxyXG4ucm93IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbn1cclxuLnNlY3Rpb24taGVhZGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIFxyXG59XHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5kaXYge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnJvdzpiZWZvcmUge1xyXG4gICAgXHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxufVxyXG46YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuOjpzZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxOTVGRjtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLndoaXRlLXRleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbn1cclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi50aXRsZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxOTVGRjtcclxuICAgXHJcbn1cclxuLnRleHQtY2VudGVyIC50aXRsZTphZnRlciB7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbn1cclxuLmNvbC1tZC0xMntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLmZvb3Rlci1sb2dvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuLmZvb3Rlci1mb2xsb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZm9vdGVyLWZvbGxvdyBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA3MnB4O1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbn1cclxuYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG46YWZ0ZXIsIDpiZWZvcmUge1xyXG4gICAgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBcclxuICAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xyXG59XHJcbi5zZWN0aW9uLWhlYWRlciAudGl0bGUge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbi5zZWN0aW9uLWhlYWRlciBoMi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMxLjVweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpe1xyXG4gLmJ0bi1mYWNlYm9vayB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcclxufVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNTBweCl7XHJcbi5idG57XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbn1cclxufVxyXG5kaXZ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY29sLXhzLTEyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5kaXZpZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDlkYWRjO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnJvdyB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG59XHJcblxyXG5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBGRkZGO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICBtYXJnaW46ICBhdXRvO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnZpc2liaWxpdHk6IGhpZGRlbjtcclxucGFkZGluZy10b3A6IDVweDtcclxuICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbm5hdiB1bFxyXG57XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5uYXYgdWwgbGl7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgXHJcbiAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgIG1hcmdpbjogLTE1cHggNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5jaGVja2J0bntcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2NoZWNre1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbi51c2VyLXBcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuICAgb2JqZWN0LXBvc2l0aW9uOjUwJSA1MCU7XHJcbiAgIGhlaWdodDogMjAwcHg7XHJcbiAgIHdpZHRoOiAyMDBweDtcclxuICAgaW1hZ2UtcmVuZGVyaW5nOiBoaWdoLXF1YWxpdHk7XHJcbiAgIGZsb2F0OiBsZWZ0O1xyXG4gICBcclxufVxyXG51e1xyXG50ZXh0LWRlY29yYXRpb24tY29sb3I6IG9yYW5nZTtcclxufVxyXG4vKi5lbWFpbFxyXG57XHJcbiAgICBcclxuICAgIHBhZGRpbmctbGVmdDogMTUwcHg7XHJcbn0qL1xyXG4uZmEtZW52ZWxvcGVcclxue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG59XHJcbi5lZGl0XHJcbntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5cclxuXHJcbn1cclxuLmxvZ291dFxyXG57XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogI0ZGNjM0NztcclxufVxyXG4vKiNuYW1lXHJcbntcclxuICAgIFxyXG4gICAgXHJcbn0qL1xyXG5cclxuLmhleVxyXG57XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICAgIFxyXG59XHJcbi5mb3JtXHJcbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmZvcm0gaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiBkZWVwcGluaztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgXHJcbn1cclxuLmZvcm0gbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjBweDtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIGNvbG9yOmRlZXBwaW5rO1xyXG4gICAgXHJcbn1cclxuLypib2R5e1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcblxyXG59Ki9cclxuLmZvcm0gbGFiZWw6OmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDo1MCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibHVlO1xyXG4gICAgIGxlZnQ6IDBweDtcclxuICAgICBib3R0b206IC0xcHg7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICB0cmFuc2l0aW9uOiB0cmFuc2ZvbSAwLjNzIGVhc2U7XHJcbn1cclxuLmNvbnRlbnQtbmFtZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTo1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxufVxyXG4uZm9ybSBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lIC5jb250ZW50LW5hbWUsXHJcbi5mb3JtIGlucHV0OmZvY3VzICsgLmxhYmVsLW5hbWUgLmNvbnRlbnQtbmFtZSxcclxuLmZvcm0gaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZSAuY29udGVudC1uYW1lXHJcbntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogZ29sZGVucm9kO1xyXG4gICAgXHJcbiAgICBcclxuXHJcbn1cclxuLmZvcm0gaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZTo6YWZ0ZXIsXHJcbi5mb3JtIGlucHV0OnZhbGlkICsgLmxhYmVsLW5hbWU6OmFmdGVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG4uZm9ybWFcclxue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgXHJcbn1cclxuLmZvcm1hIGlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBkZWVwcGluaztcclxufVxyXG4uZm9ybWEgbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjBweDtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIGNvbG9yOiBkZWVwcGluaztcclxuICAgIFxyXG59XHJcbi8qYm9keXtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblxyXG5cclxufSovXHJcbi5mb3JtYSBsYWJlbDo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibHVlO1xyXG4gICAgIGxlZnQ6IDBweDtcclxuICAgICBib3R0b206IC0xcHg7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICB0cmFuc2l0aW9uOiB0cmFuc2ZvbSAwLjNzIGVhc2U7XHJcbiAgICBcclxufVxyXG4uY29udGVudC1uYW1lYXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTo1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgXHJcbn1cclxuLmZvcm1hIGlucHV0OmZvY3VzICsgLmxhYmVsLW5hbWVhIC5jb250ZW50LW5hbWVhLFxyXG4uZm9ybWEgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWEgLmNvbnRlbnQtbmFtZWEsXHJcbi5mb3JtYSBpbnB1dDp2YWxpZCArIC5sYWJlbC1uYW1lYSAuY29udGVudC1uYW1lYVxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IGdvbGRlbnJvZDtcclxuXHJcbn1cclxuLmZvcm1hIGlucHV0OmZvY3VzICsgLmxhYmVsLW5hbWVhOjphZnRlcixcclxuLmZvcm1hIGlucHV0OnZhbGlkICsgLmxhYmVsLW5hbWVhOjphZnRlcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbn1cclxuXHJcbi5mb3JtYlxyXG57XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5mb3JtYiBpbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogZGVlcHBpbms7XHJcbn1cclxuLmZvcm1iIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTowcHg7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBjb2xvcjogZGVlcHBpbms7XHJcbn1cclxuLypib2R5e1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHJcblxyXG59Ki9cclxuLmZvcm1iIGxhYmVsOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XHJcbiAgICAgbGVmdDogMHB4O1xyXG4gICAgIGJvdHRvbTogLTFweDtcclxuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgIHRyYW5zaXRpb246IHRyYW5zZm9tIDAuM3MgZWFzZTtcclxufVxyXG4uY29udGVudC1uYW1lYntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTo1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxufVxyXG4uZm9ybWIgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWIgLmNvbnRlbnQtbmFtZWIsXHJcbi5mb3JtYiBpbnB1dDpmb2N1cyArIC5sYWJlbC1uYW1lYiAuY29udGVudC1uYW1lYixcclxuLmZvcm1iIGlucHV0OnZhbGlkICsgLmxhYmVsLW5hbWViIC5jb250ZW50LW5hbWViXHJcbntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwJSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogZ29sZGVucm9kO1xyXG5cclxufVxyXG4uZm9ybWIgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWI6OmFmdGVyLFxyXG4uZm9ybWIgaW5wdXQ6dmFsaWQgKyAubGFiZWwtbmFtZWI6OmFmdGVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG4uZm9ybWNcclxue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uZm9ybWMgaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGRlZXBwaW5rO1xyXG59XHJcbi5mb3JtYyBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206MHB4O1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgY29sb3I6IGRlZXBwaW5rO1xyXG59XHJcbi8qYm9keXtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblxyXG5cclxufSovXHJcbi5mb3JtYyBsYWJlbDo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibHVlO1xyXG4gICAgIGxlZnQ6IDBweDtcclxuICAgICBib3R0b206IC0xcHg7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICB0cmFuc2l0aW9uOiB0cmFuc2ZvbSAwLjNzIGVhc2U7XHJcbn1cclxuLmNvbnRlbnQtbmFtZWN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206NXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbn1cclxuLmZvcm1jIGlucHV0OmZvY3VzICsgLmxhYmVsLW5hbWVjIC5jb250ZW50LW5hbWVjLFxyXG4uZm9ybWMgaW5wdXQ6Zm9jdXMgKyAubGFiZWwtbmFtZWMgLmNvbnRlbnQtbmFtZWMsXHJcbi5mb3JtYyBpbnB1dDp2YWxpZCArIC5sYWJlbC1uYW1lYyAuY29udGVudC1uYW1lY1xyXG57XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IGdvbGRlbnJvZDtcclxuXHJcbn1cclxuLmZvcm1jIGlucHV0OmZvY3VzICsgLmxhYmVsLW5hbWVjOjphZnRlcixcclxuLmZvcm1jIGlucHV0OnZhbGlkICsgLmxhYmVsLW5hbWVjOjphZnRlcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbn1cclxuLmVkaXQtaW5mb1xyXG57XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmVtYWlsXHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbi5sb2dvdXQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICM5MDUwQUE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRkY2MzQ3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIC5ic2V0XHJcbiAge1xyXG5vcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4uY2FyZC1ib2R5XHJcbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhcjEsIC5iYXIyLCAuYmFyMyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xyXG4gICAgbWFyZ2luOiA2cHggMDtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFuZ2UgLmJhcjEge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcclxuICB9XHJcbiAgXHJcbiAgLmNoYW5nZSAuYmFyMiB7b3BhY2l0eTogMDt9XHJcbiAgXHJcbiAgLmNoYW5nZSAuYmFyMyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true,
      firebase: {
        apiKey: "AIzaSyAtVtsQc3SxkwpznpQwNs1YDcEAvR-E0MI",
        authDomain: "recruitment-95f0d.firebaseapp.com",
        databaseURL: "https://recruitment-95f0d.firebaseio.com",
        projectId: "recruitment-95f0d",
        storageBucket: "recruitment-95f0d.appspot.com",
        messagingSenderId: "227592393190",
        appId: "1:227592393190:web:b64d2ca59ff37c29710627",
        measurementId: "G-6GH5QXDP8E"
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyAtVtsQc3SxkwpznpQwNs1YDcEAvR-E0MI",
        authDomain: "recruitment-95f0d.firebaseapp.com",
        databaseURL: "https://recruitment-95f0d.firebaseio.com",
        projectId: "recruitment-95f0d",
        storageBucket: "recruitment-95f0d.appspot.com",
        messagingSenderId: "227592393190",
        appId: "1:227592393190:web:b64d2ca59ff37c29710627",
        measurementId: "G-6GH5QXDP8E"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Recruitment-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map