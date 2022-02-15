import { InMemoryChallengesRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Create challenge submission use case', () => {
  it('should be able to create a new challenge submission', async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();
    const sut = new CreateChallengeSubmission(studentsRepository, challengesRepository);

    const response = await sut.execute({
      studentId: 'fake-student-id',
      challengeId: 'fake-challenge-id'
    });

    expect(response).toBeTruthy();
  });
});