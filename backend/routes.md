# routes in here

/users      (get, post)
/users/:id  (get, put, delete)

/admin      (get, post)
/admin      (get, put, delete)

## input & output formats

format of data in users array { id: number, name: string, age: number, email: string, role: string }
(not implemented yet)

users get all -> (if success) {success: true, data:users} (else) {success: false, message:"string"}
user by id -> (if success) {success: true, data:user} (else) {success: false, message:"string"}

user create -> (if success) {success: true, data:newUser} (else) {success: false, message:"string"}
