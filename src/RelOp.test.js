import React from 'react';
import {render} from '@testing-library/react';

import {
  Projection,
  Rename,
  Selection,
  Except,
  Intersect,
  Join,
  Union,
} from './RelOp';

/** @test {Projection} */
it('renders a projection', () => {
  const {container} = render(<Projection project={['foo', 'bar']} />);
  expect(container).toContainHTML('π<sub>foo,bar</sub>');
});

/** @test {Rename} */
it('renders a Rename', () => {
  const {container} = render(<Rename rename={{foo: 'bar'}} />);
  expect(container).toContainHTML('ρ<sub>foo/bar</sub>');
});

/** @test {Rename} */
it('renders a Rename with multiple fields', () => {
  const {container} = render(<Rename rename={{foo: 'bar', baz: 'quux'}} />);
  expect(container).toContainHTML('ρ<sub>foo/bar,baz/quux</sub>');
});

/** @test {Selection} */
it('renders a Selection with single predicate', () => {
  const {container} = render(<Selection select={['foo=3']} />);
  expect(container).toContainHTML('σ<sub>foo=3</sub>');
});

/** @test {Selection} */
it('renders a Selection with multiple predicates', () => {
  const {container} = render(<Selection select={['foo=3', 'bar=2']} />);
  expect(container).toContainHTML('σ<sub>foo=3 ∧ bar=2</sub>');
});

/** @test {Except} */
it('renders a Except', () => {
  const {container} = render(<Except />);
  expect(container).toContainHTML('−');
});

/** @test {Intersect} */
it('renders a Intersect', () => {
  const {container} = render(<Intersect />);
  expect(container).toContainHTML('∩');
});

/** @test {Join} */
it('renders a Join', () => {
  const {container} = render(<Join />);
  expect(container).toContainHTML('×');
});

/** @test {Union} */
it('renders a Union', () => {
  const {container} = render(<Union />);
  expect(container).toContainHTML('∪');
});
