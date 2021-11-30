import { Counter, Called } from "../generated/Counter/Counter"
import { User } from "../generated/schema"

export function handleCalled(event: Called): void {
  let entity = User.load(event.params.user.toHex())

  if (entity == null) {
    entity = new User(event.params.user.toHex())
  }
  entity.count = event.params.count
  entity.save()
}
