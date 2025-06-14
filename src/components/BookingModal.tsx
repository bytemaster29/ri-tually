
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const BookingModal = ({ open, onOpenChange, clergy }) => {
  const [name, setName] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [ritual, setRitual] = React.useState("");
  const [date, setDate] = React.useState("");
  const [city, setCity] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  if (!clergy) return null;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setDetails("");
      setRitual("");
      setDate("");
      setCity("");
      setContact("");
      onOpenChange(false);
    }, 1750);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book {clergy.name}</DialogTitle>
          <DialogDescription>
            Fill in details—we’ll connect you and confirm.
          </DialogDescription>
        </DialogHeader>
        {!submitted ? (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Your Name</span>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your name"
                required
                autoFocus
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Ritual</span>
              <Input
                value={ritual}
                onChange={e => setRitual(e.target.value)}
                placeholder="e.g. Wedding, Puja, Baptism"
                required
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Preferred Date / Time</span>
              <Input
                value={date}
                onChange={e => setDate(e.target.value)}
                placeholder="e.g. July 20, 7:30AM"
                required
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">City</span>
              <Input
                value={city}
                onChange={e => setCity(e.target.value)}
                placeholder="City"
                required
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Phone or Email</span>
              <Input
                value={contact}
                onChange={e => setContact(e.target.value)}
                placeholder="Your phone or email"
                required
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium">Ritual Details</span>
              <Input
                value={details}
                onChange={e => setDetails(e.target.value)}
                placeholder="Notes (family size, custom needs, etc)"
              />
            </label>
            <DialogFooter>
              <Button type="submit" className="bg-green-700 hover:bg-green-800">
                Confirm Booking
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="flex flex-col gap-4 items-center py-5 animate-fade-in">
            <div className="bg-green-100 rounded-full p-2">
              <Check className="text-green-700 w-8 h-8" />
            </div>
            <div className="text-xl font-bold text-green-700 font-playfair">Booking Sent!</div>
            <div className="text-muted-foreground text-center">
              We'll notify you after connecting with <span className="font-medium">{clergy.name}</span>.<br />
              You can also reach out directly using the contact options on their profile.
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
