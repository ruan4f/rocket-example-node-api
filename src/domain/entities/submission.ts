import { Entity } from "../../core/domain/Entity";

type SubmissionProps = {
  challengeid: string;
  studentId: string;
  createdAt: Date;
}

class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string) {
    super(props, id);
  }

  static create(props: SubmissionProps, id?: string) {
    const submission = new Submission(props, id);

    return submission;
  }
}