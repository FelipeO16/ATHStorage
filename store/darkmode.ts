import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, stateFactory: true, name: 'darkmode' })
export default class Darkmode extends VuexModule {
  private darkmode = false

  public get $darkmode(): boolean {
    return this.darkmode
  }

  @Mutation
  public setDarkmode(): void {
    this.darkmode = !this.darkmode
  }

  @Action
  public toggle(): void {
    this.context.commit('setDarkmode')
  }
}
