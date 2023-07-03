export class PayDocument {
  id:                               number;
  COMId:                            number;  
  contract_KeyField:                number;
  branch_KeyField:                  number;
  owner_KeyField:                   number;
  build_KeyField:                   number ;
  unit_KeyField:                    number;
  installment_KeyField:             number;
  customer_KeyField:                number;
  PDOCode: number;
  PDOValue:                          number;
  PDODocType:                       string;
  PDODocDate:                          Object;
  PDODocClassType:                 string;
  PDOPrintedCode:                   string;
  PDODocSecondPerson:               string;
  PDONotes:                string;
  EntryDate:                        Object;
  last_updated:                     string;
  EntryUser:                        string;
  RowConfirm:                       number;
  RowDelete:                        number;
  RowStatus:                        number;
}
