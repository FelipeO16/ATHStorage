import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'test' })
export default class Test extends VuexModule {
  count = 0
}
