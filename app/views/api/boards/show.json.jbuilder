# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.title @board.title
json.user_id @board.user_id

json.lists @board.lists do |list|
  json.id list.id
  json.title list.title
  json.cards list.cards, :title, :id, :description, :items
end
