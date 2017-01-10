import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('donejs-project functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('donejs-project main page shows up', function() {
  F('title').text('donejs-project', 'Title is set');
});
