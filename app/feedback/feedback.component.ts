import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{
  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
 
 ngOnInit() {
   this.createFeedbackForm();
  // this.loadSavedData(); // Load saved data when the component initializes
 }

  createFeedbackForm(){
    this.feedbackForm = this.fb.group({
      feedback: ['', Validators.required],
      rating:[null,Validators.required]
    });
 }

//  loadSavedData() {
//   // Load data from local storage and populate the form if available
//   const savedData = JSON.parse(localStorage.getItem('feedbackData'));
//   if (savedData) {
//     this.feedbackForm.patchValue(savedData);
//   }
// }

 submitFeedback() {
  if (this.feedbackForm.valid) {
    // Perform actions with the form data (e.g., send it to the server)
    console.log(this.feedbackForm.value);
    const formData = this.feedbackForm.value;
    console.log(formData);

    // Save the data to local storage
    localStorage.setItem('feedbackData', JSON.stringify(formData));

    this.feedbackForm.reset();
  }
}

  }
