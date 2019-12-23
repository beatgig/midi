# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.1](https://github.com/beatgig/midi/compare/@beatgig/forms@2.1.0...@beatgig/forms@2.1.1) (2019-12-23)

**Note:** Version bump only for package @beatgig/forms





# [2.1.0](https://github.com/beatgig/midi/compare/@beatgig/forms@2.0.0...@beatgig/forms@2.1.0) (2019-10-04)


### Features

* Supports multiple args in createValidation ([45a4198](https://github.com/beatgig/midi/commit/45a4198))





# [2.0.0](https://github.com/beatgig/midi/compare/@beatgig/forms@1.1.0...@beatgig/forms@2.0.0) (2019-09-13)


* feat!: return an `onSubmit` handler from `useForm` ([f5869a8](https://github.com/beatgig/midi/commit/f5869a8))


### BREAKING CHANGES

* `useForm` will now return an `onSubmit` handler instead of a `Form` component because the form component was getting re-rendered each time the hook was being called, which was causing the form to loose all the data it had.





# 1.1.0 (2019-09-12)


### Bug Fixes

* add useForm export for the @beatgig/forms package ([3ad2da5](https://github.com/beatgig/midi/commit/3ad2da5))


### Features

* Add @beatgig/forms package. ([6d742cb](https://github.com/beatgig/midi/commit/6d742cb))
