/* Enum that represents type that is passed into redux actions and reducers
 to determinate what property has to be changed.
 */
enum OwnerInfoFieldType {
  CompanyName = 0,
  ICO = 1,
  Dic = 2,
  Street = 3,
  City = 4,
  ZipCode = 5,
  Email = 6
}

export default OwnerInfoFieldType;
