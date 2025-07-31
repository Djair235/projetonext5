import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User } from "lucide-react"

export default function UserAvatar() {
  return (
    <Avatar>
      <AvatarFallback className="bg-muted text-muted-foreground">
        <User className="h-5 w-5" />
      </AvatarFallback>
    </Avatar>
  )
}
