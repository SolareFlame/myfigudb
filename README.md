# MY FIGURINE DATABASE (myfigudb)
PERN website (Postgres (using Prisma ORM), Express, React, Node)

# DATABASE DESCRIPTION
- user [id, name, username, password]
- figure_user [user_id, figure_id, comment, score, is_bought, buy_at] ('collection' and 'wishlist')

- figure [id, name, size, release_date]
- editor [id, name]
- series [id, name]

- figure_character [figure_id, character_id]
- character [id, name, license_id]
- license [id, name]

- figure_image [id, figure_id, size]

- figure_reseller [figurine_id, reseller_id, price, ref, url, status]
- reseller [id, name, url]

- figure_status [id, name]

# GLOBAL DESCRIPTION

MyFiguDB is a website that can make user store and complete there own figure collection.
The first main usage is to search figure, check status, prizes, resellers and add to WISHLIST.
They can also feed there collection, check other collections and wishlist.