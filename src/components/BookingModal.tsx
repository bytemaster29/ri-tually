
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const BookingModal = ({ open, onOpenChange, clergy }) => {
  const [name, setName] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  if (!clergy) return null;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // For now just closes after brief "submitted" state
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setDetails("");
      onOpenChange(false);
    }, 1500);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Book {clergy.name}
          </DialogTitle>
          <DialogDescription>
            Fill out your details and we’ll connect you with this guide.
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
              <span className="text-sm font-medium">Ritual Details</span>
              <Input
                value={details}
                onChange={e => setDetails(e.target.value)}
                placeholder="e.g. Wedding on July 20 in Mumbai"
                required
              />
            </label>
            <DialogFooter>
              <Button type="submit" className="bg-green-700 hover:bg-green-800">
                Request Booking
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="flex flex-col gap-4 items-center py-5">
            <div className="text-lg font-semibold text-green-700">Booking Sent!</div>
            <div className="text-muted-foreground">We'll notify you after connecting with {clergy.name}.</div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
