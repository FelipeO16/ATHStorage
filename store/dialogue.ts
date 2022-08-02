import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
@Module({ namespaced: true, stateFactory: true, name: 'dialogue' })
export default class Dialogue extends VuexModule {
  private dialogue_box = false
  private dialogue_item = {} as any

  // Toggle dialogue box

  public get $dialogue_box(): boolean {
    return this.dialogue_box
  }

  @Mutation
  public toggleDialogue(status: boolean): void {
    this.dialogue_box = status
  }

  @Action
  public toggle(): void {
    this.context.commit('toggleDialogue')
  }

  // Set dialogue item

  public get $dialogue_item(): any {
    return this.dialogue_item
  }

  @Mutation
  public setDialogueItem(item: any): void {
    this.dialogue_item = item
  }

  @Action
  public set(item: any): void {
    this.context.commit('setDialogueItem', item)
  }

  // Clear dialogue item

  @Mutation
  public clearDialogueItem(): void {
    this.dialogue_item = {}
  }

  @Action
  public clear(): void {
    this.context.commit('clearDialogueItem')
    this.context.commit('toggleDialogue', false)
  }
}
