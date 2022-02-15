import { Entity } from "../../core/domain/Entity";

type SubmissionProps = {
  studentId: string;
  challengeId: string;  
  createdAt?: Date;
}

export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string) {
    super(props, id);
  }

  static create(props: SubmissionProps, id?: string) {
    const submission = new Submission({
      ...props, 
      createdAt: props.createdAt ?? new Date(),
    }, id);

    return submission;
  }
}