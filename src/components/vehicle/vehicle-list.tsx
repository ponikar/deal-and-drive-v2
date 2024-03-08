import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableFilters } from "../ui/table-filters";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function VehicleList() {
  return (
    <div className="">
      <TableFilters />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Registration ID</TableHead>
            <TableHead>Chassis ID</TableHead>
            <TableHead>Engine ID</TableHead>
            <TableHead>Manufacturing Year</TableHead>
            <TableHead>Cost Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Stock Entry Date</TableHead>
            <TableHead>Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>SV300169266</TableCell>
            <TableCell>ID235223344</TableCell>
            <TableCell className="">2003</TableCell>
            <TableCell className="">23,000</TableCell>
            <TableCell className="uppercase">NEW</TableCell>
            <TableCell>{new Date().toDateString()}</TableCell>
            <TableCell>Indore, Madhya Pradesh</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
